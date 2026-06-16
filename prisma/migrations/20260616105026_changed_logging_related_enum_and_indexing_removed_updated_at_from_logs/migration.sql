/*
  Warnings:

  - The values [MARKED_PENDING] on the enum `LogType` will be removed. If these variants are still used in the database, this will fail.
  - Added the required column `updatedAt` to the `Lead` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "LogType_new" AS ENUM ('CREATED', 'STAGE_CHANGED', 'STAGE_REVERTED', 'RESET', 'PENDING_CHANGED', 'MARKED_CLOSED');
ALTER TABLE "LeadLog" ALTER COLUMN "type" TYPE "LogType_new" USING ("type"::text::"LogType_new");
ALTER TYPE "LogType" RENAME TO "LogType_old";
ALTER TYPE "LogType_new" RENAME TO "LogType";
DROP TYPE "public"."LogType_old";
COMMIT;

-- AlterTable
ALTER TABLE "Lead" ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- CreateIndex
CREATE INDEX "Lead_updatedAt_idx" ON "Lead"("updatedAt");
