import { prisma } from "@/lib/utils/prisma";

export async function POST(req: Request) {
    const body = await req.json();

    const lead = await prisma.lead.create({
        data: {
            companyName: body.companyName,
            primaryContactValue: body.primaryContactValue,
            primaryPlatform: body.primaryPlatform,
            website: body.website,
            nextActionAt: body.contactDate
                ? new Date(body.contactDate)
                : null,
            secondaryContactValue: body.secondaryContactValue || undefined,
            secondaryPlatform: body.secondaryPlatform || undefined,
            note: body.note,
            stage: body.contactDate ? "SCHEDULED" : "BACKLOG",
            status: body.contactDate ? "ACTIVE" : "IDLE"
        },
    });

    return Response.json(lead);
}