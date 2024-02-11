import { Jobs } from '@app/constants/jobs';
import { Queues } from '@app/constants/queues';
import { Subjects } from '@app/constants/subjects';
import { FtpService } from '@app/ftp/ftp.service';
import { Process, Processor } from '@nestjs/bull';
import { Inject, Injectable } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { AbstractJobProcessor } from './abstract-job.processor';

@Processor(Queues.GET_CURRENT_CONTRACTS)
@Injectable()
export class CurrentContractsProcessor extends AbstractJobProcessor {
  constructor(
    @Inject(FtpService)
    private readonly ftp: FtpService,

    @Inject(JobsService)
    private readonly jobs: JobsService,
  ) {
    super();
  }

  @Process(Jobs.GET_CURRENT_CONTRACTS)
  async handler(): Promise<void> {
    const result = await this.ftp.getCurMonthContracts(Subjects.Marij_El_Resp);

    await this.jobs.downloadFile(result[0]);
  }
}
