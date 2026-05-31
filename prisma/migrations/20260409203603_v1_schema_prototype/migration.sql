/*
  Warnings:

  - You are about to drop the column `contactDate` on the `Lead` table. All the data in the column will be lost.
  - You are about to drop the column `primaryContact` on the `Lead` table. All the data in the column will be lost.
  - You are about to drop the column `secondaryContact` on the `Lead` table. All the data in the column will be lost.
  - The `secondaryPlatform` column on the `Lead` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `primaryContactValue` to the `Lead` table without a default value. This is not possible if the table is not empty.
  - Added the required column `stage` to the `Lead` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `primaryPlatform` on the `Lead` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Stage" AS ENUM ('BACKLOG', 'PRIMARY_CONTACT', 'PRIMARY_CONTACT_FOLLOW_UP', 'SECONDARY_CONTACT', 'SECONDARY_CONTACT_FOLLOW_UP', 'CLOSED');

-- CreateEnum
CREATE TYPE "LeadStatus" AS ENUM ('ACTIVE', 'PENDING', 'CLOSED');

-- CreateEnum
CREATE TYPE "LeadVerdict" AS ENUM ('WON', 'LOST');

-- CreateEnum
CREATE TYPE "Platform" AS ENUM ('EMAIL', 'INSTAGRAM', 'PHONE');

-- CreateEnum
CREATE TYPE "LogType" AS ENUM ('CREATED', 'STAGE_CHANGED', 'STAGE_REVERTED', 'RESET', 'MARKED_PENDING');

-- AlterTable
ALTER TABLE "Lead" DROP COLUMN "contactDate",
DROP COLUMN "primaryContact",
DROP COLUMN "secondaryContact",
ADD COLUMN     "nextActionAt" TIMESTAMP(3),
ADD COLUMN     "primaryContactValue" TEXT NOT NULL,
ADD COLUMN     "secondaryContactValue" TEXT,
ADD COLUMN     "stage" "Stage" NOT NULL,
ADD COLUMN     "status" "LeadStatus" NOT NULL DEFAULT 'ACTIVE',
ADD COLUMN     "verdict" "LeadVerdict",
DROP COLUMN "primaryPlatform",
ADD COLUMN     "primaryPlatform" "Platform" NOT NULL,
DROP COLUMN "secondaryPlatform",
ADD COLUMN     "secondaryPlatform" "Platform";

-- CreateTable
CREATE TABLE "LeadLog" (
    "id" TEXT NOT NULL,
    "leadId" TEXT NOT NULL,
    "type" "LogType" NOT NULL,
    "fromStage" "Stage",
    "toStage" "Stage",
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "LeadLog_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Lead_stage_idx" ON "Lead"("stage");

-- CreateIndex
CREATE INDEX "Lead_status_idx" ON "Lead"("status");

-- CreateIndex
CREATE INDEX "Lead_nextActionAt_idx" ON "Lead"("nextActionAt");

-- AddForeignKey
ALTER TABLE "LeadLog" ADD CONSTRAINT "LeadLog_leadId_fkey" FOREIGN KEY ("leadId") REFERENCES "Lead"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
