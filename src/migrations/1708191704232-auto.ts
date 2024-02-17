import { MigrationInterface, QueryRunner } from "typeorm";

export class Auto1708191704232 implements MigrationInterface {
    name = 'Auto1708191704232'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "payments" ("id" SERIAL NOT NULL, "kbk" text NOT NULL, "paymentMonth" text NOT NULL, "paymentYear" text NOT NULL, "paymentSum" text NOT NULL, "contractsRegNum" text, CONSTRAINT "PK_197ab7af18c93fbb0c9b28b4a59" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "organizations" ("inn" text NOT NULL, "kpp" text NOT NULL, "fullName" text NOT NULL, "shortName" text, CONSTRAINT "PK_c393006549dfe262fb5dd69377f" PRIMARY KEY ("inn"))`);
        await queryRunner.query(`CREATE INDEX "IDX_dbb8336937fac0900ac0829b29" ON "organizations" ("shortName") `);
        await queryRunner.query(`CREATE TABLE "products" ("id" character varying NOT NULL, "okpd2code" text NOT NULL, "okpd2name" text NOT NULL, "name" text NOT NULL, "type" text NOT NULL, "okei" text NOT NULL, "price" numeric NOT NULL, "quantity" numeric, "sum" numeric, "contractRegNum" text, CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "documents" ("sid" text NOT NULL, "currency" text NOT NULL, "paid" text NOT NULL, "startDate" TIMESTAMP NOT NULL, "endDate" TIMESTAMP NOT NULL, "documentBody" jsonb NOT NULL, "finalStageExecution" boolean NOT NULL, "quantity" text NOT NULL, "publishDate" TIMESTAMP NOT NULL, "url" text NOT NULL, "stageSid" text, CONSTRAINT "PK_d32d55c48abe89e935b9d442f32" PRIMARY KEY ("sid"))`);
        await queryRunner.query(`CREATE TABLE "stages" ("sid" text NOT NULL, "startDate" text NOT NULL, "endDate" text NOT NULL, "stagePrice" text NOT NULL, "stageAdvancePaymentSum" text NOT NULL, "contractsRegNum" text, CONSTRAINT "PK_3f7336276905c5b11f9f41fdc92" PRIMARY KEY ("sid"))`);
        await queryRunner.query(`CREATE TABLE "contracts" ("regNum" text NOT NULL, "name" text NOT NULL, "number" text NOT NULL, "signDate" TIMESTAMP NOT NULL, "price" numeric NOT NULL, "executionStartedAt" TIMESTAMP NOT NULL, "executionEndedAt" TIMESTAMP NOT NULL, "placementDate" TIMESTAMP NOT NULL, "publishDate" TIMESTAMP NOT NULL, "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "customerInn" text, "supplierInn" text, CONSTRAINT "PK_789021808a6baf83601f1ec4b43" PRIMARY KEY ("regNum"))`);
        await queryRunner.query(`ALTER TABLE "payments" ADD CONSTRAINT "FK_6ac178b92b0cfd05c5f387cab44" FOREIGN KEY ("contractsRegNum") REFERENCES "contracts"("regNum") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "products" ADD CONSTRAINT "FK_fd3e1cd09fa3e3754bec2c1f7dc" FOREIGN KEY ("contractRegNum") REFERENCES "contracts"("regNum") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "documents" ADD CONSTRAINT "FK_420dea4ac3cf8e7ad80ad5a8bca" FOREIGN KEY ("stageSid") REFERENCES "stages"("sid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "stages" ADD CONSTRAINT "FK_f625886920a607a054123ca1500" FOREIGN KEY ("contractsRegNum") REFERENCES "contracts"("regNum") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "contracts" ADD CONSTRAINT "FK_a1372b44c16ba34a9f2edc8c696" FOREIGN KEY ("customerInn") REFERENCES "organizations"("inn") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "contracts" ADD CONSTRAINT "FK_6afe361e8e3094483bda5aea630" FOREIGN KEY ("supplierInn") REFERENCES "organizations"("inn") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contracts" DROP CONSTRAINT "FK_6afe361e8e3094483bda5aea630"`);
        await queryRunner.query(`ALTER TABLE "contracts" DROP CONSTRAINT "FK_a1372b44c16ba34a9f2edc8c696"`);
        await queryRunner.query(`ALTER TABLE "stages" DROP CONSTRAINT "FK_f625886920a607a054123ca1500"`);
        await queryRunner.query(`ALTER TABLE "documents" DROP CONSTRAINT "FK_420dea4ac3cf8e7ad80ad5a8bca"`);
        await queryRunner.query(`ALTER TABLE "products" DROP CONSTRAINT "FK_fd3e1cd09fa3e3754bec2c1f7dc"`);
        await queryRunner.query(`ALTER TABLE "payments" DROP CONSTRAINT "FK_6ac178b92b0cfd05c5f387cab44"`);
        await queryRunner.query(`DROP TABLE "contracts"`);
        await queryRunner.query(`DROP TABLE "stages"`);
        await queryRunner.query(`DROP TABLE "documents"`);
        await queryRunner.query(`DROP TABLE "products"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_dbb8336937fac0900ac0829b29"`);
        await queryRunner.query(`DROP TABLE "organizations"`);
        await queryRunner.query(`DROP TABLE "payments"`);
    }

}
