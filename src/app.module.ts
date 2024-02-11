import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { ContractsModule } from './contracts/contracts.module';
import { FtpModule } from './ftp/ftp.module';
import { JobsModule } from './jobs/jobs.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    BullModule.forRoot({
      redis: {
        host: process.env.REDIS_HOST,
        port: Number(process.env.REDIS_PORT),
      },
      defaultJobOptions: { removeOnFail: false, attempts: 5 },
    }),
    DatabaseModule,
    ContractsModule,
    FtpModule,
    JobsModule,
  ],
})
export class AppModule {}
