import { Process, Processor } from '@nestjs/bull';
import { Inject, Injectable } from '@nestjs/common';
import { Jobs } from '@app/constants/jobs';
import { Queues } from '@app/constants/queues';
import { FtpService } from '@app/ftp/ftp.service';
import { DownloadFileJobBody } from '@app/types/jobs';
import { Job } from 'bullmq';
import { JobsService } from './jobs.service';
import { AbstractJobProcessor } from './abstract-job.processor';

@Processor(Queues.DOWNLOAD_FILE)
@Injectable()
export class DownloadFileProcessor extends AbstractJobProcessor {
  constructor(
    @Inject(FtpService)
    private readonly ftp: FtpService,

    @Inject(JobsService)
    private readonly jobs: JobsService,
  ) {
    super();
  }

  @Process(Jobs.DOWNLOAD_FILE)
  async handler(job: Job<DownloadFileJobBody>): Promise<void> {
    const fileName = await this.ftp.downloadFile(job.data);

    await this.jobs.fileDownloaded(fileName);
  }
}
