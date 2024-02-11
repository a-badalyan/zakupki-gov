import { Process, Processor } from '@nestjs/bull';
import { Inject, Injectable } from '@nestjs/common';
import { Jobs } from '@app/constants/jobs';
import { Queues } from '@app/constants/queues';
import { FileDownloadedJobBody } from '@app/types/jobs';
import { Job } from 'bullmq';
import AdmZip from 'adm-zip';
import { JobsService } from './jobs.service';
import { AbstractJobProcessor } from './abstract-job.processor';

@Processor(Queues.FILE_DOWNLOADED)
@Injectable()
export class FileDownloadedProcessor extends AbstractJobProcessor {
  constructor(
    @Inject(JobsService)
    private readonly jobs: JobsService,
  ) {
    super();
  }

  @Process(Jobs.FILE_DOWNLOADED)
  async handler(job: Job<FileDownloadedJobBody>): Promise<void> {
    const zip = new AdmZip(`temp/${job.data}`);

    await Promise.all(
      zip.getEntries().map(async ({ entryName }) => {
        await this.jobs.extractFile({
          archiveName: job.data,
          fileName: entryName,
        });
      }),
    );
  }
}
