/*
  Warnings:

  - You are about to drop the column `nextActionAt` on the `LeadLog` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "LeadLog" DROP COLUMN "nextActionAt",
ADD COLUMN     "fromNextActionAt" TIMESTAMP(3),
ADD COLUMN     "toNextActionAt" TIMESTAMP(3);

-- CreateIndex
CREATE INDEX "LeadLog_leadId_rolledBackAt_createdAt_idx" ON "LeadLog"("leadId", "rolledBackAt", "createdAt");
