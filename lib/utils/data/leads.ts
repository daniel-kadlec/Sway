import { formatLead } from "@/lib/utils/data/formatLead";

export async function createLead(form: any) {
    const res = await fetch("/api/leads", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
    });

    if (!res.ok) throw new Error();
}

export async function getLeads() {
    const res = await fetch ("/api/leads", {
        method: "GET"
    });

    if (!res.ok) {
        throw new Error("Failed to fetch leads");
    }

    const leads = await res.json();

    return leads.map(formatLead);
}

export async function deleteLead(id: string) {

    const res = await fetch("/api/leads", {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
    });

    if (!res.ok) throw new Error("Failed to delete lead");
}



export async function updateLead() {

}

