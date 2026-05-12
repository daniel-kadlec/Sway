import { prisma } from "@/lib/prisma";
import { formatLead } from "@/lib/utils/data/formatLead";

export async function getLeads() {

    const leads = await prisma.lead.findMany({
        orderBy: {
            createdAt: "desc",
        },
    });

    return leads.map(formatLead);
}

// export async function getLead() {
//
// }
//
// export async function createLead() {
//
// }
//
// export async function updateLead() {
//
// }
//
// export async function deleteLead() {
//
// }