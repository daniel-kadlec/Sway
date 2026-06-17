-- DropForeignKey
ALTER TABLE "LeadLog" DROP CONSTRAINT "LeadLog_leadId_fkey";

-- AddForeignKey
ALTER TABLE "LeadLog" ADD CONSTRAINT "LeadLog_leadId_fkey" FOREIGN KEY ("leadId") REFERENCES "Lead"("id") ON DELETE CASCADE ON UPDATE CASCADE;
