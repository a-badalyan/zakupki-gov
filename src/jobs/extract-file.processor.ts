import { Jobs } from '@app/constants/jobs';
import { Queues } from '@app/constants/queues';
import { Process, Processor } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Job } from 'bullmq';
import { ExtractFileJobBody } from '@app/types/jobs';
import AdmZip from 'adm-zip';
// import { AbstractJobProcessor } from './abstract-job.processor';
import { Repository } from 'typeorm';
import {
  Contract,
  Organization,
  Finance,
  Product,
  Stage,
  Acceptance,
  Payment,
} from '@app/database/entities';
import { InjectRepository } from '@nestjs/typeorm';
import { xml2json } from 'xml-js';
import { IContract } from '@app/types/contract';
import { IContractProcedure } from '@app/types/contractProcedure';
import { writeFileSync } from 'fs';

@Processor(Queues.EXTRACT_FILE)
@Injectable()
export class ExtractFileProcessor {
  constructor(
    @InjectRepository(Contract)
    private readonly contractRepository: Repository<Contract>,

    @InjectRepository(Organization)
    private readonly organizationRepository: Repository<Organization>,

    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,

    @InjectRepository(Stage)
    private readonly stageRepository: Repository<Stage>,

    @InjectRepository(Finance)
    private readonly financeRepository: Repository<Finance>,

    @InjectRepository(Acceptance)
    private readonly acceptanceRepository: Repository<Acceptance>,

    @InjectRepository(Payment)
    private readonly paymentRepository: Repository<Payment>,
  ) {
    // super();
  }

  @Process(Jobs.EXTRACT_FILE)
  async handler({ data }: Job<ExtractFileJobBody>): Promise<void> {
    if (data.fileName.slice(-3) !== 'xml') return;

    const zip = new AdmZip(`temp/${data.archiveName}`);
    const file = zip.getEntry(data.fileName);
    if (!file) return;

    const xml2jsonResult = xml2json(file.getData().toString(), {
      compact: true,
      trim: true,
      ignoreDeclaration: true,
      ignoreAttributes: true,
      textKey: 'value',
    });

    const parsedXml: IContract | IContractProcedure =
      JSON.parse(xml2jsonResult);

    try {
      if ('ns3:contractProcedure' in parsedXml['ns3:export']) {
        const contractProcedure =
          parsedXml['ns3:export']['ns3:contractProcedure'];

        const currentStage = await this.stageRepository.findOneBy({
          sid: contractProcedure.executions.stage.sid.value,
        });

        if (!currentStage) return;

        const executions = Array.isArray(contractProcedure.executions.execution)
          ? contractProcedure.executions.execution
          : [contractProcedure.executions.execution];

        executions.forEach((execution) => {
          const document = new Document();
          document.currency = execution.currency.name.value;
          document.documentBody = execution.docAcceptance ?? execution.payDoc;
          document.finalStageExecution =
            contractProcedure.executions.finalStageExecution?.value ?? false;
          document.paid = execution.paid.value;
          // document.sid = contractProcedure.sid.value;
          document.publishDate = contractProcedure.publishDate.value;
          // document.quantity
          document.stage = currentStage;

          documents.push(document);
        });
      }

      if ('ns3:contract' in parsedXml['ns3:export']) {
        const contractData = parsedXml['ns3:export']['ns3:contract'];

        const suppliers: Array<Organization> = [];
        const suppliersSet = new Set<string>();

        if (contractData.suppliersInfo) {
          const contractSuppliers = Array.isArray(
            contractData.suppliersInfo.supplierInfo,
          )
            ? contractData.suppliersInfo.supplierInfo
            : [contractData.suppliersInfo.supplierInfo];

          contractSuppliers.forEach((s) => {
            const supplier = new Organization();

            if (s.legalEntityRF) {
              const { EGRULInfo } = s.legalEntityRF;

              if (suppliersSet.has(EGRULInfo.INN.value)) return;

              supplier.inn = EGRULInfo.INN.value;
              supplier.kpp = EGRULInfo.KPP.value;
              supplier.fullName = EGRULInfo.fullName.value;
              supplier.shortName = EGRULInfo.shortName?.value;
            }

            if (s.individualPersonRFIndEntr) {
              const { EGRIPInfo } = s.individualPersonRFIndEntr;
              if (suppliersSet.has(EGRIPInfo.INN.value)) return;

              supplier.inn = EGRIPInfo.INN.value;
              supplier.fullName = `Индивидуальный предприниматель ${EGRIPInfo.lastName.value} ${EGRIPInfo.firstName.value} ${EGRIPInfo.middleName.value}`;
              supplier.shortName = `ИП ${EGRIPInfo.lastName.value} ${EGRIPInfo.firstName.value[0]}. ${EGRIPInfo.middleName.value[0]}.`;
            }

            suppliersSet.add(supplier.inn);
            suppliers.push(supplier);
          });
        }

        const customer = new Organization();
        customer.inn = contractData.customer.inn.value;
        customer.kpp = contractData.customer.kpp.value;
        customer.fullName = contractData.customer.fullName.value;
        customer.shortName = contractData.customer.shortName?.value;

        await this.organizationRepository.upsert([...suppliers, customer], {
          conflictPaths: ['inn'],
        });

        const contract = new Contract();
        contract.regNum = contractData.regNum.value;
        contract.name = contractData.contractSubject.value;
        contract.number = contractData.number.value;
        contract.signDate = contractData.signDate.value;
        contract.price = contractData.priceInfo.price.value;
        contract.executionStartedAt =
          contractData.executionPeriod.startDate.value;
        contract.executionEndedAt = contractData.executionPeriod.endDate.value;
        contract.publishDate = contractData.publishDate.value;
        // FIXME: check MANY-TO-MANY ?
        contract.supplier = suppliers[0];
        contract.customer = customer;

        const products: Array<Product> = [];

        const contractProducts = Array.isArray(contractData.products.product)
          ? contractData.products.product
          : [contractData.products.product];

        contractProducts.forEach((p) => {
          const product = new Product();

          product.id = p.sid.value;
          product.okpd2code =
            p.OKPD2?.code.value ?? p.KTRU?.OKPD2.code.value ?? '';
          product.okpd2name =
            p.OKPD2?.name.value ?? p.KTRU?.OKPD2.name.value ?? '';
          product.name = p.name.value;
          product.type = p.type?.value;
          product.okei = p.OKEI.nationalName?.value ?? p.OKEI.fullName.value;
          product.price = p.price.value;
          product.quantity = p.quantity?.value;
          product.sum = p.sum?.value;
          product.contract = contract;

          products.push(product);
        });

        const stages: Array<Stage> = [];
        const finances: Array<Finance> = [];

        const contractStages = Array.isArray(
          contractData.executionPeriod.stages,
        )
          ? contractData.executionPeriod.stages
          : [contractData.executionPeriod.stages];

        contractStages.forEach((s) => {
          const stage = new Stage();

          stage.sid = s.sid.value;
          stage.startDate = s.startDate.value;
          stage.endDate = s.endDate.value;
          stage.stagePrice = s.stagePrice?.value ?? '0';
          stage.stageAdvancePaymentSum =
            s.stageAdvancePaymentSum?.priceValue.value ?? '0';
          stage.contract = contract;

          stages.push(stage);
        });

        if (contractData.finances.financingPlan) {
          const contractFinanceStages = Array.isArray(
            contractData.finances.financingPlan.stages,
          )
            ? contractData.finances.financingPlan.stages
            : [contractData.finances.financingPlan.stages];

          contractFinanceStages.forEach((s) => {
            const contractPayments =
              s.payments &&
              (Array.isArray(s.payments) ? s.payments : [s.payments]);

            contractPayments?.forEach((f) => {
              const finance = new Finance();
              finance.kbk = f.KBK2016?.value;
              finance.paymentMonth = f.paymentMonth?.value;
              finance.paymentYear = f.paymentYear.value;
              finance.paymentSum = f.paymentSum.value;
              finance.stage = stages.find(({ sid }) => sid === s.sid.value)!;

              finances.push(finance);
            });
          });
        }

        await this.contractRepository.save(contract);
        await this.stageRepository.save(stages);
        await this.productRepository.save(products);
        await this.financeRepository.save(finances);
      }
    } catch (error) {
      console.log({ msg: data.fileName });
      console.log({ error });

      writeFileSync(
        `temp/${data.fileName}.ts`,
        `export default ${JSON.stringify(parsedXml)}`,
      );
    }
  }
}
