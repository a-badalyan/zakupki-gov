import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as entities from './entities';
import { Init1704655289704 } from '@app/migrations/1704655289704-init';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.POSTGRES_URI ?? '',
      entities,
      migrations: [Init1704655289704],
      migrationsRun: true,
    }),
  ],
})
export class DatabaseModule {}
