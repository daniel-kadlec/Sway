'use server'

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

export async function createLead(form: any) {
    await prisma.lead.create({
        data: {
            companyName: form.companyName,
            primaryContactValue: form.primaryContactValue,
            primaryPlatform: form.primaryPlatform,
            website: form.website,
            nextActionAt: form.contactDate
                ? new Date(form.contactDate)
                : null,
            secondaryContactValue:
                form.secondaryContactValue || undefined,
            secondaryPlatform:
                form.secondaryPlatform || undefined,
            note: form.note,
            stage: form.contactDate
                ? "SCHEDULED"
                : "BACKLOG",
            status: form.contactDate
                ? "ACTIVE"
                : "IDLE",
            primaryContactAt: form.contactDate
                ? new Date(form.contactDate)
                : null,
        },
    });
}

export async function deleteLead(id: string) {
    await prisma.lead.delete({
        where: {
            id,
        },
    });
}