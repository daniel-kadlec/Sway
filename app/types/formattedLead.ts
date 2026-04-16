import { Lead, Platform } from "./lead";

export type FormattedLead = Lead & {
    contacts: Record<Platform, string | null>;

    formattedStage: string;

    primaryContactAtFormatted: string;
    primaryFollowUpAtFormatted: string;
    secondaryContactAtFormatted: string;
    secondaryFollowUpAtFormatted: string;

    nextActionAtFormatted: string;
};