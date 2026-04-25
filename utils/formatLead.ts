import { Lead, Platform } from "@/types/lead";
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

    contacts[lead.primaryPlatform as "EMAIL" | "INSTAGRAM" | "PHONE"] =
        lead.primaryContactValue;

    if (lead.secondaryPlatform && lead.secondaryContactValue) {
        contacts[lead.secondaryPlatform as "EMAIL" | "INSTAGRAM" | "PHONE"] =
            lead.secondaryContactValue;
    }
    return contacts;
}

function formatStage(stage: string): string {
    return stage.charAt(0).toUpperCase() + stage.slice(1).toLowerCase();
}

export function formatLead(lead: Lead): FormattedLead {
    return {
        ...lead,

        contacts: mapContacts(lead),

        formattedStage: formatStage(lead.stage),

        primaryContactAtFormatted: formatDate(lead.primaryContactAt),
        primaryFollowUpAtFormatted: formatDate(lead.primaryFollowUpAt),
        secondaryContactAtFormatted: formatDate(lead.secondaryContactAt),
        secondaryFollowUpAtFormatted: formatDate(lead.secondaryFollowUpAt),

        nextActionAtFormatted: formatDate(lead.nextActionAt),
    };
}