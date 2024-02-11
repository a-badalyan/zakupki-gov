import { Module } from '@nestjs/common';
import { DatabaseModule } from '@app/database/database.module';
import { ContractsService } from './contracts.service';
import { ContractsController } from './contracts.controller';
import { FtpService } from '@app/ftp/ftp.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Contract, Organization } from '@app/database/entities';

@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature([Contract, Organization])],
  controllers: [ContractsController],
  providers: [ContractsService, FtpService],
})
export class ContractsModule {}
