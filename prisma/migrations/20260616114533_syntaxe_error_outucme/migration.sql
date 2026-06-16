/*
  Warnings:

  - You are about to drop the column `outocme` on the `LeadLog` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "LeadLog" DROP COLUMN "outocme",
ADD COLUMN     "outcome" "LeadOutcome";
