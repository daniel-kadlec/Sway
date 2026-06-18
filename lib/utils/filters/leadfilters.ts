import { Lead } from "@/types/lead";

export function todaysLeads(leads: Lead[]) {
    const today = new Date().toDateString();

    return leads.filter(
        (lead) =>
            lead.nextActionAt &&
            new Date(lead.nextActionAt).toDateString() === today
    );
}
export function overdueLeads(leads: Lead[]) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return leads.filter(
        (lead) =>
            lead.nextActionAt &&
            new Date(lead.nextActionAt) < today &&
            lead.status !== "CLOSED"
    );
}

export function pendingLeads(leads: Lead[]) {
    return leads.filter((lead) => lead.status === "PENDING");
}

export function backlogLeads(leads: Lead[]) {
    return leads.filter((lead) => lead.stage === "BACKLOG");
}

export function activeLeads(leads: Lead[]) {
    return leads.filter((lead) =>
            lead.status === "ACTIVE"
    );
}

export function lostLeads(leads: Lead[]) {
    return leads.filter((lead) => lead.outcome === "LOST");
}

export function wonLeads(leads: Lead[]) {
    return leads.filter((lead) => lead.outcome === "WON");
}