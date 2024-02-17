import { Module } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { BullModule } from '@nestjs/bull';
import { CurrentContractsProcessor } from './current-contracts.processor';
import { FtpService } from '@app/ftp/ftp.service';
import { Queues } from '@app/constants/queues';
import { DownloadFileProcessor } from './download-file.processor';
import { FileDownloadedProcessor } from './file-downloaded.processor';
import { ExtractFileProcessor } from './extract-file.processor';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  Contract,
  Organization,
  Payment,
  Product,
  Stage,
} from '@app/database/entities';

@Module({
  imports: [
    BullModule.registerQueue(
      { name: Queues.GET_CURRENT_CONTRACTS },
      { name: Queues.DOWNLOAD_FILE },
      { name: Queues.FILE_DOWNLOADED },
      { name: Queues.EXTRACT_FILE },
    ),
    TypeOrmModule.forFeature([Contract, Organization, Product, Payment, Stage]),
  ],
  providers: [
    CurrentContractsProcessor,
    ExtractFileProcessor,
    DownloadFileProcessor,
    FileDownloadedProcessor,
    JobsService,
    FtpService,
  ],
})
export class JobsModule {}
