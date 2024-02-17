import { DataSource } from 'typeorm';
import * as entities from './database/entities';

const AppDataSource = new DataSource({
  type: 'postgres',
  url:
    process.env.POSTGRES_URI ??
    'postgres://postgres:postgres@localhost/postgres',
  migrations: ['src/migrations/*.ts'],
  entities,
});

export default AppDataSource;
