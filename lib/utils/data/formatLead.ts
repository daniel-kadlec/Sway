import { Lead, Platform } from "@/lib/generated/client";
import { FormattedLead } from "@/types/formattedLead";

function formatDate(date?: string | Date | null): string {
    if (!date) return "—";

    return new Date(date).toLocaleDateString("cs-CZ", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
    });
}

function mapContacts(lead: Lead): Record<Platform, string | null> {
    const contacts: Record<Platform, string | null> = {
        EMAIL: null,
        INSTAGRAM: null,
        PHONE: null,
    };

    if (lead.primaryPlatform) {
        contacts[lead.primaryPlatform] = lead.primaryContactValue ?? null;
    }

    if (lead.secondaryPlatform) {
        contacts[lead.secondaryPlatform] =
            lead.secondaryContactValue ?? null;
    }

    return contacts;
}

function formatStage(stage: string): string {
    return stage.charAt(0).toUpperCase() + stage.slice(1).toLowerCase().replaceAll("_", " ")
        ;
}

export function formatLead(lead: Lead): FormattedLead {
    return {
        ...lead,

        contacts: mapContacts(lead),

        stageFormatted: formatStage(lead.stage),
        statusFormatted: formatStage(lead.status),

        primaryContactAtFormatted: formatDate(lead.primaryContactAt),
        primaryFollowUpAtFormatted: formatDate(lead.primaryFollowUpAt),
        secondaryContactAtFormatted: formatDate(lead.secondaryContactAt),
        secondaryFollowUpAtFormatted: formatDate(lead.secondaryFollowUpAt),

        nextActionAtFormatted: formatDate(lead.nextActionAt),
    };
}