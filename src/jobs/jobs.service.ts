import { Jobs } from '@app/constants/jobs';
import { Queues } from '@app/constants/queues';
import { FtpFileInfo } from '@app/types/ftp';
import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';

@Injectable()
export class JobsService {
  constructor(
    @InjectQueue(Queues.GET_CURRENT_CONTRACTS)
    private readonly getCurrentContractsQueue: Queue,

    @InjectQueue(Queues.DOWNLOAD_FILE)
    private readonly downloadFileQueue: Queue,

    @InjectQueue(Queues.FILE_DOWNLOADED)
    private readonly fileDownloadedQueue: Queue,

    @InjectQueue(Queues.EXTRACT_FILE)
    private readonly extractFileQueue: Queue,
  ) {}

  async startRepeatableJobs(): Promise<void> {
    await this.getCurrentContractsQueue.add(
      Jobs.GET_CURRENT_CONTRACTS,
      {},
      { repeat: { every: 10 * 1000 } },
    );
  }

  async downloadFile(file: FtpFileInfo): Promise<void> {
    await this.downloadFileQueue.add(Jobs.DOWNLOAD_FILE, file, {
      jobId: file.fileName,
    });
  }

  async fileDownloaded(fileName: string): Promise<void> {
    await this.fileDownloadedQueue.add(Jobs.FILE_DOWNLOADED, fileName, {
      jobId: fileName,
    });
  }

  async extractFile({
    fileName,
    archiveName,
  }: {
    fileName: string;
    archiveName: string;
  }): Promise<void> {
    await this.extractFileQueue.add(
      Jobs.EXTRACT_FILE,
      {
        fileName,
        archiveName,
      },
      {
        jobId: fileName,
      },
    );
  }
}
