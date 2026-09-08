'use server'

import {prisma} from "@/lib/prisma";
import {Stage, LeadOutcome , LeadLossReason, LogType, LeadStatus} from "@/lib/generated/client";
import {revalidatePath} from "next/cache";

// Helpers
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
    leadLossReason?: LeadLossReason,
    fromNextActionAt: Date | null = null,
    toNextActionAt: Date | null = null

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

            fromNextActionAt:
                fromNextActionAt?.getTime() !== toNextActionAt?.getTime()
                    ? fromNextActionAt
                    : null,

            toNextActionAt:
                fromNextActionAt?.getTime() !== toNextActionAt?.getTime()
                    ? toNextActionAt
                    : null,
        },
    });
}

function revalidatePaths () {
    revalidatePath("/dashboard");
    revalidatePath("/kanban");
    revalidatePath("/table");
}
// End of helpers

// ------- //
export async function advanceLead(id: string) {
    const lead = await getLead(id);

    if (lead.stage === "SECONDARY_CONTACT_FOLLOW_UP") {
        return {
            reachedClosed: true,
        };
    }

    const settings = await prisma.settings.findFirst();
    const contactDelay = settings?.contactDelay;
    const advanceFromBacklogDelay = settings?.advanceFromBacklogDelay;

    let nextStage: Stage;

    switch (lead.stage) {
        case "BACKLOG":
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

        case "CLOSED":
            throw new Error("Lead is already closed");

        default:
            throw new Error(`Invalid stage: ${lead.stage}`);
    }

    const updateData: {
        stage: Stage;
        status?: LeadStatus;
        nextActionAt?: Date | null;
    } = {
        stage: nextStage,
    };

    if (lead.status !== "ACTIVE") {
        updateData.status = "ACTIVE";
    }

    if (nextStage === "PRIMARY_CONTACT") {
        const nextActionAt = new Date();
        nextActionAt.setDate(
            nextActionAt.getDate() + (advanceFromBacklogDelay ?? 0)
        );
        updateData.nextActionAt = nextActionAt;
    }

    if (
        lead.stage !== "BACKLOG" &&
        contactDelay != null
    ) {
        const updatedNextActionAt = new Date();
        updatedNextActionAt.setDate(
            updatedNextActionAt.getDate() + contactDelay
        );

        updateData.nextActionAt = updatedNextActionAt;
    }

    const updatedLead = await prisma.lead.update({
        where: { id },
        data: updateData,
    });

    revalidatePaths();

    const nextStatus = updatedLead.status;

    await createLeadLog(
        id,
        "STAGE_CHANGED",
        lead.stage,
        nextStage,
        lead.status,
        nextStatus,
        undefined,
        undefined,
        lead.nextActionAt,
        updatedLead.nextActionAt
    );

    return {
        reachedClosed: false,
    };
}

// ------- //

export async function rollbackLead(id: string) {
    const latestLog = await prisma.leadLog.findFirst({
        where: {
            leadId: id,
            rolledBackAt: null,
            type: {
                not: "ROLLED_BACK",
            },
        },
        orderBy: {
            createdAt: "desc",
        },
    });

    if (!latestLog) {
        throw new Error("No actions to rollback");
    }

    if (latestLog.type === "CREATED") {
        throw new Error("Cannot rollback lead creation");
    }

    const updateData: {
        stage?: Stage;
        status?: LeadStatus;
        nextActionAt?: Date | null;
        outcome?: LeadOutcome | null;
        reason?: LeadLossReason | null;
    } = {};

    if (latestLog.fromStage) {
        updateData.stage = latestLog.fromStage;
    }

    if (latestLog.fromStatus) {
        updateData.status = latestLog.fromStatus;
    }

    if (
        latestLog.fromNextActionAt !== null ||
        latestLog.toNextActionAt !== null
    ) {
        updateData.nextActionAt = latestLog.fromNextActionAt;
    }

    if (latestLog.type === "CLOSED") {
        updateData.outcome = null;
        updateData.reason = null;
    }

    await prisma.$transaction(async (tx) => {
        await tx.leadLog.update({
            where: {
                id: latestLog.id,
            },
            data: {
                rolledBackAt: new Date(),
            },
        });

        await tx.lead.update({
            where: {
                id,
            },
            data: updateData,
        });

        await tx.leadLog.create({
            data: {
                leadId: id,
                type: "ROLLED_BACK",

                fromStage: latestLog.toStage,
                toStage: latestLog.fromStage,

                fromStatus: latestLog.toStatus,
                toStatus: latestLog.fromStatus,

                fromNextActionAt: latestLog.toNextActionAt,
                toNextActionAt: latestLog.fromNextActionAt,

                outcome: latestLog.outcome,
                reason: latestLog.reason,
            },
        });
    });

    revalidatePaths();
}

// ------- //

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
    await createLeadLog(
        id,
        "RESET",
        lead.stage,
        "BACKLOG",
        lead.status,
        "IDLE",
        undefined,
        undefined,
        lead.nextActionAt,
        null
    )
    revalidatePaths()
}

// ------- //

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
        newStatus,
        undefined,
        undefined,
        lead.nextActionAt,
        lead.nextActionAt
    );
    revalidatePaths();
}

// ------- //

export async function finishLead(id:string, outcome:LeadOutcome, lossReason?:LeadLossReason){
    const lead = await getLead(id)

    await createLeadLog(
        id,
        "CLOSED",
        lead.stage,
        "CLOSED",
        lead.status,
        "CLOSED",
        outcome,
        lossReason,
        lead.nextActionAt,
        null
    )
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

// ------- //
