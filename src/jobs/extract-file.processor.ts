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
  Payment,
  Product,
  Stage,
} from '@app/database/entities';
import { InjectRepository } from '@nestjs/typeorm';
import { xml2json } from 'xml-js';
import { IRootObject } from '@app/types/contract';
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

    const parsedXml: IRootObject = JSON.parse(xml2jsonResult);
    const contractData = parsedXml['ns3:export']['ns3:contract'];

    try {
      if (contractData) {
        const suppliers: Array<Organization> = [];

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

              supplier.inn = EGRULInfo.INN.value;
              supplier.kpp = EGRULInfo.KPP.value;
              supplier.fullName = EGRULInfo.fullName.value;
              supplier.shortName = EGRULInfo.shortName?.value;
            }

            if (s.individualPersonRFIndEntr) {
              const { EGRIPInfo } = s.individualPersonRFIndEntr;

              supplier.inn = EGRIPInfo.INN.value;
              supplier.fullName = `Индивидуальный предприниматель ${EGRIPInfo.lastName.value} ${EGRIPInfo.firstName.value} ${EGRIPInfo.middleName.value}`;
              supplier.shortName = `ИП ${EGRIPInfo.lastName.value} ${EGRIPInfo.firstName.value[0]}. ${EGRIPInfo.middleName.value[0]}.`;
            }

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
        contract.signDate = new Date(contractData.signDate.value);
        contract.price = contractData.priceInfo.price.value;
        contract.executionStartedAt = new Date(
          contractData.executionPeriod.startDate.value,
        );
        contract.executionEndedAt = new Date(
          contractData.executionPeriod.endDate.value,
        );
        contract.placementDate = new Date(contractData.placementDate.value);
        contract.publishDate = new Date(contractData.publishDate.value);
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
        const payments: Array<Payment> = [];

        const contractStages = Array.isArray(
          contractData.executionPeriod.stages,
        )
          ? contractData.executionPeriod.stages
          : [contractData.executionPeriod.stages];

        contractStages.forEach((s) => {
          const stage = new Stage();

          stage.sid = s.sid.value;
          stage.startDate = new Date(s.startDate.value);
          stage.endDate = new Date(s.endDate.value);
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
              const payment = new Payment();
              payment.kbk = f.KBK2016?.value;
              payment.paymentMonth = f.paymentMonth?.value;
              payment.paymentYear = f.paymentYear.value;
              payment.paymentSum = f.paymentSum.value;
              payment.stage = stages.find(
                (stage) => stage.sid === s.sid.value,
              )!;

              payments.push(payment);
            });
          });
        }

        await this.contractRepository.save(contract);
        await this.stageRepository.save(stages);
        await this.productRepository.save(products);
        await this.paymentRepository.save(payments);
      }
    } catch (error) {
      console.log({ msg: data.fileName });
      console.log({ error });

      writeFileSync(
        `temp/${data.fileName}.ts`,
        `export default ${JSON.stringify(contractData)}`,
      );
    }
  }
}
