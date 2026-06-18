import { FormattedLead } from "@/types/formattedLead";

export function todaysLeads(leads: FormattedLead[]) {
    const today = new Date().toDateString();

    return leads.filter(
        (lead) =>
            lead.nextActionAt &&
            new Date(lead.nextActionAt).toDateString() === today
    );
}
export function overdueLeads(leads: FormattedLead[]) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return leads.filter(
        (lead) =>
            lead.nextActionAt &&
            new Date(lead.nextActionAt) < today &&
            lead.status !== "CLOSED"
    );
}

export function pendingLeads(leads: FormattedLead[]) {
    return leads.filter((lead) => lead.status === "PENDING");
}

export function backlogLeads(leads: FormattedLead[]) {
    return leads.filter((lead) => lead.stage === "BACKLOG");
}

export function activeLeads(leads: FormattedLead[]) {
    return leads.filter((lead) =>
            lead.status === "ACTIVE"
    );
}

export function lostLeads(leads: FormattedLead[]) {
    return leads.filter((lead) => lead.outcome === "LOST");
}

export function wonLeads(leads: FormattedLead[]) {
    return leads.filter((lead) => lead.outcome === "WON");
}