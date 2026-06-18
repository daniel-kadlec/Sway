/*
  Warnings:

  - You are about to drop the column `NextActionAt` on the `LeadLog` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "LeadLog" DROP COLUMN "NextActionAt",
ADD COLUMN     "nextActionAt" TIMESTAMP(3);
