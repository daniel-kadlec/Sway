import {
    Stage,
    LeadStatus,
    LeadOutcome,
    LeadLossReason,
    Platform,
} from "@/lib/generated/client";

export type Lead = {
    id: string;
    companyName: string;
    note?: string | null;

    primaryContactValue?: string | null;
    primaryPlatform?: Platform | null;

    secondaryContactValue?: string | null;
    secondaryPlatform?: Platform | null;

    website?: string | null;

    stage: Stage;
    status: LeadStatus;

    outcome?: LeadOutcome | null;
    reason?: LeadLossReason | null;

    nextActionAt?: Date | null;

    primaryContactAt?: Date | null;
    primaryFollowUpAt?: Date | null;
    secondaryContactAt?: Date | null;
    secondaryFollowUpAt?: Date | null;

    createdAt: Date;
    updatedAt: Date;
};