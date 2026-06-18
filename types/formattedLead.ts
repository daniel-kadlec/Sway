import { Lead, Platform } from "@/lib/generated/client";

export type FormattedLead = Lead & {
    contacts: Record<Platform, string | null>;

    stageFormatted: string;
    statusFormatted: string;

    primaryContactAtFormatted: string;
    primaryFollowUpAtFormatted: string;
    secondaryContactAtFormatted: string;
    secondaryFollowUpAtFormatted: string;

    nextActionAtFormatted: string;

};