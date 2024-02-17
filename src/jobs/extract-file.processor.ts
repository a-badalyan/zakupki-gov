import { Jobs } from '@app/constants/jobs';
import { Queues } from '@app/constants/queues';
import { Process, Processor } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Job } from 'bullmq';
import { ExtractFileJobBody } from '@app/types/jobs';
import AdmZip from 'adm-zip';
import { AbstractJobProcessor } from './abstract-job.processor';
import { Repository } from 'typeorm';
import { Contract, Organization } from '@app/database/entities';
import { InjectRepository } from '@nestjs/typeorm';
import { xml2json } from 'xml-js';
import { IRootObject, ISupplierInfo } from '@app/types/contract';

@Processor(Queues.EXTRACT_FILE)
@Injectable()
export class ExtractFileProcessor extends AbstractJobProcessor {
  constructor(
    @InjectRepository(Contract)
    private readonly contractRepository: Repository<Contract>,

    @InjectRepository(Organization)
    private readonly organizationRepository: Repository<Organization>,
  ) {
    super();
  }

  @Process(Jobs.EXTRACT_FILE)
  async handler({ data }: Job<ExtractFileJobBody>): Promise<void> {
    try {
      if (data.fileName.slice(-3) !== 'xml') return;

      const zip = new AdmZip(`temp/${data.archiveName}`);
      const file = zip.getEntry(data.fileName);

      const compact = xml2json(file.getData().toString(), {
        compact: true,
        trim: true,
        ignoreDeclaration: true,
        ignoreAttributes: true,
        textKey: 'value',
      });

      const parsedXml: IRootObject = JSON.parse(compact);

      if (parsedXml['ns3:export']['ns3:contract']) {
        const contractData = parsedXml['ns3:export']['ns3:contract'];

        const supplier = new Organization();
        supplier.inn = (
          contractData.suppliersInfo.supplierInfo as ISupplierInfo
        ).legalEntityRF.EGRULInfo.INN.value;
        supplier.kpp = (
          contractData.suppliersInfo.supplierInfo as ISupplierInfo
        ).legalEntityRF.EGRULInfo.KPP.value;
        supplier.fullName = (
          contractData.suppliersInfo.supplierInfo as ISupplierInfo
        ).legalEntityRF.EGRULInfo.fullName.value;
        supplier.shortName = (
          contractData.suppliersInfo.supplierInfo as ISupplierInfo
        ).legalEntityRF.EGRULInfo.shortName.value;

        const customer = new Organization();
        customer.inn = contractData.customer.inn.value;
        customer.kpp = contractData.customer.kpp.value;
        customer.fullName = contractData.customer.fullName.value;
        customer.shortName = contractData.customer.shortName.value;

        await this.organizationRepository.upsert([supplier, customer], {
          conflictPaths: ['inn'],
          skipUpdateIfNoValuesChanged: true,
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
        contract.supplier = supplier;
        contract.customer = customer;

        await this.contractRepository.save(contract);
      }
    } catch (error) {
      console.log({ error });
    }
  }
}
