import { FormattedLead } from "@/types/formattedLead";

export type LeadContacts = {
    email: string | null;
    instagram: string | null;
    phone: string | null;
};

export function getLeadContacts(lead: FormattedLead): LeadContacts {
    const contacts: LeadContacts = {
        email: null,
        instagram: null,
        phone: null,
    };

    const platformMap = {
        EMAIL: "email",
        INSTAGRAM: "instagram",
        PHONE: "phone",
    } as const;

    if (lead.primaryPlatform) {
        contacts[platformMap[lead.primaryPlatform]] =
            lead.primaryContactValue ?? null;
    }

    if (lead.secondaryPlatform) {
        contacts[platformMap[lead.secondaryPlatform]] =
            lead.secondaryContactValue ?? null;
    }

    return contacts;
}