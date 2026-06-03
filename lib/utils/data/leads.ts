'use server'

import { prisma } from "@/lib/prisma";
import { formatLead } from "@/lib/utils/data/formatLead";
import { revalidatePath } from "next/cache";


function revalidatePaths () {
    revalidatePath("/dashboard");
    revalidatePath("/kanban");
    revalidatePath("/table");
}

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
            primaryContactValue: form.primaryContactValue || null,
            primaryPlatform: form.primaryPlatform || null,
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
                ? "PRIMARY_CONTACT"
                : "BACKLOG",
            status: form.contactDate
                ? "ACTIVE"
                : "IDLE",
            primaryContactAt: form.contactDate
                ? new Date(form.contactDate)
                : null,
        },
    });
    revalidatePaths();
}

export async function deleteLead(id: string) {
    await prisma.lead.delete({
        where: {
            id,
        },
    });
    revalidatePaths();
}

export async function updateLead(id: string, form: any) {
    await prisma.lead.update({
        where: {
            id,
        },
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
        },
    });
    revalidatePaths();
}