'use server'

import {prisma} from "@/lib/prisma";
import {Stage, LeadOutcome , LeadLossReason, LogType, LeadStatus} from "@/lib/generated/client";
import {revalidatePath} from "next/cache";

// Helpers
const settings = await prisma.settings.findFirst();
const contactDelay = settings?.contactDelay;

async function getLead (id: string) {
    const lead = await prisma.lead.findUnique({
        where: {
            id: id,
        },
    });
    if (!lead){
        throw new Error("Lead not found");
    }
    return lead;
}

async function createLeadLog(
    leadID: string,
    logType: LogType,
    previousStage?: Stage,
    newStage?: Stage,
    previousStatus?: LeadStatus,
    newStatus?: LeadStatus,
    leadOutcome?: LeadOutcome,
    leadLossReason?: LeadLossReason
) {
    await prisma.leadLog.create({
        data: {
            leadId: leadID,
            type: logType,

            fromStage:
                previousStage !== newStage ? previousStage : null,
            toStage:
                previousStage !== newStage ? newStage : null,

            fromStatus:
                previousStatus !== newStatus ? previousStatus : null,
            toStatus:
                previousStatus !== newStatus ? newStatus : null,

            outcome: leadOutcome,
            reason: leadLossReason,
        },
    });
}

function revalidatePaths () {
    revalidatePath("/dashboard");
    revalidatePath("/kanban");
    revalidatePath("/table");
}

// End of helpers

export async function advanceLead(id: string) {
    const lead = await getLead(id);

    async function advanceNextActionAt() {
        const settings = await prisma.settings.findFirst();
        const contactDelay = settings?.contactDelay;

        if (!lead.nextActionAt || contactDelay == null) return;

        const updatedNextActionAt = new Date(lead.nextActionAt);
        updatedNextActionAt.setDate(
            updatedNextActionAt.getDate() + contactDelay
        );

        await prisma.lead.update({
            where: {
                id,
            },
            data: {
                nextActionAt: updatedNextActionAt,
            },
        });
    }

    if (lead.stage === "SECONDARY_CONTACT_FOLLOW_UP") {
        return {
            reachedClosed: true,
        };
    }

    let nextStage: Stage;

    switch (lead.stage) {
        case "BACKLOG":
            nextStage = "PRIMARY_CONTACT";
            break;

        case "PRIMARY_CONTACT":
            nextStage = "PRIMARY_CONTACT_FOLLOW_UP";
            await advanceNextActionAt();
            break;

        case "PRIMARY_CONTACT_FOLLOW_UP":
            nextStage = "SECONDARY_CONTACT";
            await advanceNextActionAt();
            break;

        case "SECONDARY_CONTACT":
            nextStage = "SECONDARY_CONTACT_FOLLOW_UP";
            await advanceNextActionAt();
            break;

        case "CLOSED":
            throw new Error("Lead is already closed");

        default:
            throw new Error(`Invalid stage: ${lead.stage}`);
    }

    const updateData: {
        stage: Stage;
        status?: LeadStatus;
        nextActionAt?: Date;
    } = {
        stage: nextStage,
    };

    if (lead.status !== "ACTIVE") {
        updateData.status = "ACTIVE";
    }

    if (nextStage === "PRIMARY_CONTACT") {
        updateData.nextActionAt = new Date();
    }

    await prisma.lead.update({
        where: {
            id,
        },
        data: updateData,
    });

    revalidatePaths();

    const nextStatus = updateData.status ? updateData.status : lead.status;
    if (updateData.status !== lead.status || nextStage !== lead.stage) {

    }

    await createLeadLog(id, "STAGE_CHANGED", lead.stage, nextStage, lead.status, nextStatus)

    return {
        reachedClosed: false,
    };
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
    async function rollbackNextActionAt() {


        const lead = await getLead(id);

        if (!lead?.nextActionAt || contactDelay == null) return;

        const updatedNextActionAt = new Date(lead.nextActionAt);
        updatedNextActionAt.setDate(
            updatedNextActionAt.getDate() - contactDelay
        );

        await prisma.lead.update({
            where: {
                id: id,
            },
            data: {
                nextActionAt: updatedNextActionAt,
                reason: null,
                outcome: null
            },
        });
    }

    const stage:Stage = Lead.stage;
    let previousStage: Stage;

    switch (stage) {
        case "BACKLOG":
        throw new Error(`Stage already in backlog`);
        case "PRIMARY_CONTACT":
            previousStage = "BACKLOG";
            await prisma.lead.update({
                where: {
                    id: id,
                },
                data: {
                    nextActionAt: null,
                },
            })
            break;
        case "PRIMARY_CONTACT_FOLLOW_UP":
            previousStage = "PRIMARY_CONTACT";
            await rollbackNextActionAt();
            break;
        case "SECONDARY_CONTACT":
            previousStage = "PRIMARY_CONTACT_FOLLOW_UP";
            await rollbackNextActionAt();
            break;
        case "SECONDARY_CONTACT_FOLLOW_UP":
            previousStage = "SECONDARY_CONTACT";
            await rollbackNextActionAt();
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
    const lead = await getLead(id)

    if (lead.stage == "BACKLOG" && lead.status == "IDLE"){
        throw new Error("Lead is already in backlog");
    }

    await prisma.lead.update({
        where: {
            id: id,
        },
        data: {
            stage: "BACKLOG",
            nextActionAt: null,
            status: "IDLE",
            outcome: null,
            reason: null,
        },
    })
    await createLeadLog(id, "RESET", lead.stage, "BACKLOG", lead.status, "IDLE")
    revalidatePaths()
}

export async function setPendingLead(id: string) {
    const lead = await getLead(id);

    if (lead.stage === "BACKLOG") {
        throw new Error("Unable to set pending");
    }

    let newStatus: "ACTIVE" | "PENDING";

    if (lead.status === "PENDING") {
        newStatus = "ACTIVE";
    } else if (lead.status === "ACTIVE") {
        newStatus = "PENDING";
    } else {
        throw new Error(`Cannot toggle status from ${lead.status}`);
    }

    await prisma.lead.update({
        where: { id },
        data: { status: newStatus },
    });

    await createLeadLog(
        id,
        "STATUS_CHANGED",
        undefined,
        undefined,
        lead.status,
        newStatus
    );

    revalidatePaths();
}
export async function finishLead(id:string, outcome:LeadOutcome, lossReason?:LeadLossReason){
    const lead = await getLead(id)

    await createLeadLog(id, "CLOSED", lead.stage, "CLOSED", lead.status, "CLOSED", outcome, lossReason)

    await prisma.lead.update({
        where: {
            id: id,
        },
        data: {
            stage: "CLOSED",
            status: "CLOSED",
            outcome: outcome,
            reason: lossReason ? lossReason : null,
            nextActionAt: null,
        },
    })
    revalidatePaths()
}