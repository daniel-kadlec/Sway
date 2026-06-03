'use server'

import {prisma} from "@/lib/prisma";
import {Stage} from "@/lib/generated/client";
import {revalidatePath} from "next/cache";

function revalidatePaths () {
    revalidatePath("/dashboard");
    revalidatePath("/kanban");
    revalidatePath("/table");
}

export async function advanceLead(id: string) {
    const Lead = await prisma.lead.findUnique({
        where: {
            id: id,
        },
    });
    if (!Lead){
        throw new Error("Lead not found");
    }
    const stage:Stage = Lead.stage;
    let nextStage: Stage;

    switch (stage) {
        case "BACKLOG":
            throw new Error(`Set a contact date to start the flow`)
        case "SCHEDULED":
            nextStage = "PRIMARY_CONTACT";
            break;
        case "PRIMARY_CONTACT":
            nextStage = "PRIMARY_CONTACT_FOLLOW_UP";
            break;
        case "PRIMARY_CONTACT_FOLLOW_UP":
            nextStage = "SECONDARY_CONTACT";
            break;
        case "SECONDARY_CONTACT":
            nextStage = "SECONDARY_CONTACT_FOLLOW_UP";
            break;
        case "SECONDARY_CONTACT_FOLLOW_UP":
            nextStage = "CLOSED";
            break;
        case "CLOSED":
            throw new Error(`Stage closed`);
        default:
            throw new Error(`Invalid stage: ${stage}`);
    }

    await prisma.lead.update({
        where: {
            id: id,
        },
        data: {
            stage: nextStage,
        },
    });
    revalidatePaths()
}

export async function rollbackLead(id: string) {
    const Lead = await prisma.lead.findUnique({
        where: {
            id: id,
        },
    });
    if (!Lead){
        throw new Error("Lead not found");
    }
    const stage:Stage = Lead.stage;
    let previousStage: Stage;

    switch (stage) {
        case "BACKLOG":
            throw new Error(`Stage backlog`);
        case "SCHEDULED":
            previousStage = "BACKLOG";
            break;
        case "PRIMARY_CONTACT":
            previousStage = "SCHEDULED";
            break;
        case "PRIMARY_CONTACT_FOLLOW_UP":
            previousStage = "PRIMARY_CONTACT";
            break;
        case "SECONDARY_CONTACT":
            previousStage = "PRIMARY_CONTACT_FOLLOW_UP";
            break;
        case "SECONDARY_CONTACT_FOLLOW_UP":
            previousStage = "SECONDARY_CONTACT";
            break;
        case "CLOSED":
            previousStage = "SECONDARY_CONTACT_FOLLOW_UP";
            break;
        default:
            throw new Error(`Invalid stage: ${stage}`);
    }

    await prisma.lead.update({
        where: {
            id: id,
        },
        data: {
            stage: previousStage,
        },
    });
    revalidatePaths()
}

export async function resetLead(id:string){
    await prisma.lead.update({
        where: {
            id: id,
        },
        data: {
            stage: "BACKLOG",
            nextActionAt: null,
        },
    })
    revalidatePaths()
}

export async function setPendingLead(id:string){
    await prisma.lead.update({
        where: {
            id: id,
        },
        data: {
            status: "PENDING"
        },
    })
    revalidatePaths()
}

export async function finishLead(id:string){
    await prisma.lead.update({
        where: {
            id: id,
        },
        data: {
            stage: "CLOSED",
            status: "CLOSED",
        },
    })
}