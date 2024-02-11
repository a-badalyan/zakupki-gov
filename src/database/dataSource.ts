import { DataSource } from 'typeorm';
import * as entities from '@app/database/entities';
import { Init1704655289704 } from '@app/migrations/1704655289704-init';

export default new DataSource({
  type: 'postgres',
  url: process.env.POSTGRES_URI ?? '',
  entities,
  migrations: [Init1704655289704],
  migrationsRun: true,
});
