import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Init1704655289704 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'organizations',
        columns: [
          { name: 'inn', type: 'text', isPrimary: true },
          { name: 'kpp', type: 'text', isNullable: false },
          { name: 'fullName', type: 'text', isNullable: false },
          { name: 'shortName', type: 'text', isNullable: true },
        ],
        indices: [{ columnNames: ['shortName'] }],
      }),
    );

    await queryRunner.createTable(
      new Table({
        name: 'contracts',
        columns: [
          { name: 'regNum', type: 'text', isPrimary: true },
          { name: 'name', type: 'text', isNullable: false },
          { name: 'number', type: 'text', isNullable: false },
          { name: 'signDate', type: 'timestamp', isNullable: false },
          { name: 'price', type: 'decimal', isNullable: false },
          { name: 'supplierInn', type: 'text', isNullable: false },
          { name: 'customerInn', type: 'text', isNullable: false },
          { name: 'executionStartedAt', type: 'timestamp', isNullable: false },
          { name: 'executionEndedAt', type: 'timestamp', isNullable: false },
          { name: 'placementDate', type: 'timestamp', isNullable: false },
          { name: 'publishDate', type: 'timestamp', isNullable: false },
          {
            name: 'updatedAt',
            type: 'timestamp',
            isNullable: false,
            default: 'CURRENT_TIMESTAMP',
          },
        ],

        foreignKeys: [
          {
            columnNames: ['supplierInn'],
            referencedColumnNames: ['inn'],
            referencedTableName: 'organizations',
            onDelete: 'CASCADE',
          },
          {
            columnNames: ['customerInn'],
            referencedColumnNames: ['inn'],
            referencedTableName: 'organizations',
            onDelete: 'CASCADE',
          },
        ],
      }),
    );

    await queryRunner.createTable(
      new Table({
        name: 'stages',
        columns: [
          { name: 'sid', type: 'text', isPrimary: true },
          { name: 'startDate', type: 'timestamp', isNullable: false },
          { name: 'endDate', type: 'timestamp', isNullable: false },
          { name: 'stagePrice', type: 'decimal', isNullable: false },
          { name: 'price', type: 'decimal', isNullable: false },
          {
            name: 'stageAdvancePaymentSum',
            type: 'decimal',
            isNullable: false,
          },
          { name: 'contractsRegNum', type: 'text', isNullable: false },
        ],

        foreignKeys: [
          {
            columnNames: ['contractsRegNum'],
            referencedColumnNames: ['regNum'],
            referencedTableName: 'contracts',
            onDelete: 'CASCADE',
          },
        ],
      }),
    );

    await queryRunner.createTable(
      new Table({
        name: 'products',
        columns: [
          { name: 'id', type: 'text', isPrimary: true },
          { name: 'okpd2code', type: 'text', isNullable: false },
          { name: 'okpd2name', type: 'text', isNullable: false },
          { name: 'name', type: 'text', isNullable: false },
          { name: 'type', type: 'text', isNullable: false },
          { name: 'okei', type: 'text', isNullable: false },
          { name: 'price', type: 'decimal', isNullable: false },
          { name: 'quantity', type: 'decimal', isNullable: true },
          { name: 'sum', type: 'decimal', isNullable: true },
          { name: 'contractRegNum', type: 'text', isNullable: false },
        ],

        foreignKeys: [
          {
            columnNames: ['contractRegNum'],
            referencedColumnNames: ['regNum'],
            referencedTableName: 'contracts',
            onDelete: 'CASCADE',
          },
        ],
      }),
    );

    await queryRunner.createTable(
      new Table({
        name: 'documents',
        columns: [
          { name: 'sid', type: 'text', isPrimary: true },
          { name: 'currency', type: 'text', isNullable: false },
          { name: 'paid', type: 'decimal', isNullable: false },
          { name: 'startDate', type: 'timestamp', isNullable: false },
          { name: 'endDate', type: 'timestamp', isNullable: false },
          { name: 'documentBody', type: 'jsonb', isNullable: false },
          { name: 'finalStageExecution', type: 'boolean', isNullable: false },
          { name: 'quantity', type: 'decimal', isNullable: false },
          { name: 'publishDate', type: 'timestamp', isNullable: false },
          { name: 'url', type: 'text', isNullable: false },
          { name: 'stageSid', type: 'text', isNullable: false },
          { name: 'productId', type: 'text', isNullable: false },
        ],

        foreignKeys: [
          {
            columnNames: ['stageSid'],
            referencedColumnNames: ['sid'],
            referencedTableName: 'stages',
            onDelete: 'CASCADE',
          },
          {
            columnNames: ['productId'],
            referencedColumnNames: ['id'],
            referencedTableName: 'products',
            onDelete: 'CASCADE',
          },
        ],
      }),
    );

    await queryRunner.createTable(
      new Table({
        name: 'payments',
        columns: [
          { name: 'id', type: 'text', isPrimary: true },
          { name: 'kbk', type: 'text', isNullable: false },
          { name: 'paymentMonth', type: 'text', isNullable: false },
          { name: 'paymentYear', type: 'text', isNullable: false },
          { name: 'sum', type: 'decimal', isNullable: false },
          { name: 'contractRegNum', type: 'text', isNullable: false },
        ],

        foreignKeys: [
          {
            columnNames: ['contractRegNum'],
            referencedColumnNames: ['regNum'],
            referencedTableName: 'contracts',
            onDelete: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('organizations');
    await queryRunner.dropTable('contracts');
    await queryRunner.dropTable('stages');
    await queryRunner.dropTable('documents');
    await queryRunner.dropTable('products');
    await queryRunner.dropTable('payments');
  }
}
