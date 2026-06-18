/*
  Warnings:

  - You are about to drop the column `verdict` on the `Lead` table. All the data in the column will be lost.
  - Added the required column `updatedAt` to the `LeadLog` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "LeadOutcome" AS ENUM ('WON', 'LOST');

-- CreateEnum
CREATE TYPE "LeadLossReason" AS ENUM ('GHOSTED', 'REJECTED', 'NO_BUDGET', 'NO_RESPONSE', 'OTHER');

-- AlterEnum
ALTER TYPE "LogType" ADD VALUE 'MARKED_CLOSED';

-- AlterTable
ALTER TABLE "Lead" DROP COLUMN "verdict",
ADD COLUMN     "outcome" "LeadOutcome",
ADD COLUMN     "reason" "LeadLossReason";

-- AlterTable
ALTER TABLE "LeadLog" ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- DropEnum
DROP TYPE "LeadVerdict";
