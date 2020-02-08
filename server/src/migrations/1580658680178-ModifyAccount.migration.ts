import { MigrationInterface, QueryRunner } from "typeorm";

export class MofifyAccount1580658680178 implements MigrationInterface {
  async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      `ALTER TABLE "account" ADD COLUMN "name" VARCHAR, ADD COLUMN "facebook" VARCHAR, ADD COLUMN "google" VARCHAR, ADD COLUMN "twitter" VARCHAR, ADD COLUMN "github" VARCHAR, ADD COLUMN "slack" VARCHAR, ADD COLUMN "token" JSONB`
    );
  }
  async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      `ALTER TABLE "account" DROP COLUMN "name", DROP COLUMN "facebook", DROP COLUMN "google", DROP COLUMN "twitter", DROP COLUMN "github", DROP COLUMN "slack", DROP COLUMN "token"`
    );
  }
}
