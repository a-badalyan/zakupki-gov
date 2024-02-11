import { Jobs } from '@app/constants/jobs';
import { Queues } from '@app/constants/queues';
import { Process, Processor } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Job } from 'bullmq';
import { ExtractFileJobBody } from '@app/types/jobs';
import { parseStringPromise } from 'xml2js';
import AdmZip from 'adm-zip';
import { AbstractJobProcessor } from './abstract-job.processor';
import { Root } from '@app/types/c';
import { Repository } from 'typeorm';
import { Contract, Organization } from '@app/database/entities';
import { InjectRepository } from '@nestjs/typeorm';
import { writeFileSync } from 'fs';

@Processor(Queues.EXTRACT_FILE)
@Injectable()
export class ExtractFileProcessor {
  constructor(
    @InjectRepository(Contract)
    private contractRepository: Repository<Contract>,

    @InjectRepository(Organization)
    private organizationRepository: Repository<Organization>,
  ) {
    // super();
  }

  @Process(Jobs.EXTRACT_FILE)
  async handler({ data }: Job<ExtractFileJobBody>): Promise<void> {
    if (data.fileName.slice(-3) !== 'xml') return;

    const zip = new AdmZip(`temp/${data.archiveName}`);
    const file = zip.getEntry(data.fileName);

    const parsedXml: Root = await parseStringPromise(file.getData().toString());

    if (parsedXml['ns3:export']['ns3:contract']) {
      const contractData = parsedXml['ns3:export']['ns3:contract'];

      try {
        // individualPersonRFIndEntr

        // individualPersonRFIndEntr: [
        //   {
        //     EGRIPInfo: [
        //       {
        //         OGRNIP: ['323723200081561'],
        //         lastName: ['ВЫШЕГОРОДСКИХ'],
        //         firstName: ['ПАВЕЛ'],
        //         middleName: ['АНАТОЛЬЕВИЧ'],
        //         INN: ['720404599455'],
        //         address: [
        //           '625063, Тюменская область, г.о. ГОРОД ТЮМЕНЬ, Г ТЮМЕНЬ, УЛ АЛЕКСАНДРА ПРОТОЗАНОВА, Д. 12, К. 1, КВ. 330',
        //         ],
        //       },
        //     ],
        //     otherInfo: [
        //       {
        //         isIP: ['true'],
        //         contactEMail: ['Seikotd@mail.ru'],
        //         contactPhone: ['8-982916-7184'],
        //       },
        //     ],
        //   },
        // ],

        await this.organizationRepository.save({
          inn: contractData[0].suppliersInfo[0].supplierInfo[0].legalEntityRF[0]
            .EGRULInfo[0].INN[0],
          kpp: contractData[0].suppliersInfo[0].supplierInfo[0].legalEntityRF[0]
            .EGRULInfo[0].KPP[0],
          fullName:
            contractData[0].suppliersInfo[0].supplierInfo[0].legalEntityRF[0]
              .EGRULInfo[0].fullName[0],
          shortName:
            contractData[0].suppliersInfo[0].supplierInfo[0].legalEntityRF[0]
              .EGRULInfo[0].shortName?.[0],
        });

        await this.organizationRepository.save({
          inn: contractData[0].customer[0].inn[0],
          kpp: contractData[0].customer[0].kpp[0],
          fullName: contractData[0].customer[0].fullName[0],
          shortName: contractData[0].customer[0].shortName?.[0],
        });

        await this.contractRepository.save({
          regNum: contractData[0].regNum[0],
          name: contractData[0].contractSubject[0],
          number: contractData[0].number[0],
          signDate: contractData[0].signDate[0],
          price: contractData[0].priceInfo[0].price[0],
          executionStartedAt: contractData[0].executionPeriod[0].startDate[0],
          executionEndedAt: contractData[0].executionPeriod[0].endDate[0],
          placementDate: contractData[0].placementDate[0],
          publishDate: contractData[0].publishDate[0],
          products: contractData[0].products[0].product.map((product) => {
            return {
              id: product.sid[0],
              okpd2code:
                product.OKPD2?.[0].code[0] ??
                product.KTRU?.[0].OKPD2[0].code[0],
              okpd2name:
                product.OKPD2?.[0].name[0] ??
                product.KTRU?.[0].OKPD2[0].name[0],
              name: product.name[0],
              type: product.type[0],
              okei:
                product.OKEI[0].nationalCode?.[0] ??
                product.OKEI[0].fullName[0],
              price: product.price[0],
              quantity: product.quantity?.[0] ?? undefined,
              sum: product.sum?.[0],
              contractRegNum: contractData[0].regNum[0],
            };
          }),
          customerInn: contractData[0].customer[0].inn[0],
          supplierInn:
            contractData[0].suppliersInfo[0].supplierInfo[0].legalEntityRF[0]
              .EGRULInfo[0].INN[0],
        });
      } catch (err) {
        writeFileSync(
          `temp/err/${data.fileName}.ts`,
          `export default ${JSON.stringify(contractData)}`,
        );
        console.log({
          data,
          err,
        });
      }
    }
  }
}
