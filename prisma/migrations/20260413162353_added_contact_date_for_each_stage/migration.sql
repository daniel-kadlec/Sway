-- AlterTable
ALTER TABLE "Lead" ADD COLUMN     "primaryContactAt" TIMESTAMP(3),
ADD COLUMN     "primaryFollowUpAt" TIMESTAMP(3),
ADD COLUMN     "secondaryContactAt" TIMESTAMP(3),
ADD COLUMN     "secondaryFollowUpAt" TIMESTAMP(3);
