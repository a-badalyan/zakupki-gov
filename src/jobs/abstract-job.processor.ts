import { OnQueueCompleted, OnQueueFailed } from '@nestjs/bull';
import { Job } from 'bullmq';

export abstract class AbstractJobProcessor {
  @OnQueueCompleted()
  completed(job: Job) {
    console.log({
      msg: 'complete_job',
      jobName: job.name,
      jobId: job.id,
      body: job.data,
    });
  }

  @OnQueueFailed()
  failed(job: Job, err: Error) {
    console.log({
      msg: 'failed_job',
      jobName: job.name,
      error: err.message,
    });
  }
}
