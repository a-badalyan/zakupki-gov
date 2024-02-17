import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as entities from '@app/database/entities';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.POSTGRES_URI ?? '',
      entities,
      migrations: ['src/migrations/*.js'],
    }),
  ],
})
export class DatabaseModule {}
