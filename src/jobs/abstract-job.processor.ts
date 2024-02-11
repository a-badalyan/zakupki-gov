import { OnQueueActive, OnQueueCompleted } from '@nestjs/bull';
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

  @OnQueueActive()
  failed(job: Job) {
    console.log({
      msg: 'processing_job',
      jobName: job.name,
      jobId: job.id,
      body: job.data,
    });
  }
}
