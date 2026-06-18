/*
  Warnings:

  - The values [SCHEDULED] on the enum `Stage` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Stage_new" AS ENUM ('BACKLOG', 'PRIMARY_CONTACT', 'PRIMARY_CONTACT_FOLLOW_UP', 'SECONDARY_CONTACT', 'SECONDARY_CONTACT_FOLLOW_UP', 'CLOSED');
ALTER TABLE "Lead" ALTER COLUMN "stage" TYPE "Stage_new" USING ("stage"::text::"Stage_new");
ALTER TABLE "LeadLog" ALTER COLUMN "fromStage" TYPE "Stage_new" USING ("fromStage"::text::"Stage_new");
ALTER TABLE "LeadLog" ALTER COLUMN "toStage" TYPE "Stage_new" USING ("toStage"::text::"Stage_new");
ALTER TYPE "Stage" RENAME TO "Stage_old";
ALTER TYPE "Stage_new" RENAME TO "Stage";
DROP TYPE "public"."Stage_old";
COMMIT;
