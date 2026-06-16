/*
  Warnings:

  - The values [STAGE_REVERTED,PENDING_CHANGED,MARKED_CLOSED] on the enum `LogType` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `updatedAt` on the `LeadLog` table. All the data in the column will be lost.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "LogType_new" AS ENUM ('CREATED', 'STAGE_CHANGED', 'STATUS_CHANGED', 'CLOSED', 'RESET');
ALTER TABLE "LeadLog" ALTER COLUMN "type" TYPE "LogType_new" USING ("type"::text::"LogType_new");
ALTER TYPE "LogType" RENAME TO "LogType_old";
ALTER TYPE "LogType_new" RENAME TO "LogType";
DROP TYPE "public"."LogType_old";
COMMIT;

-- AlterTable
ALTER TABLE "LeadLog" DROP COLUMN "updatedAt",
ADD COLUMN     "fromStatus" "LeadStatus",
ADD COLUMN     "outocme" "LeadOutcome",
ADD COLUMN     "reason" "LeadLossReason",
ADD COLUMN     "toStatus" "LeadStatus";
