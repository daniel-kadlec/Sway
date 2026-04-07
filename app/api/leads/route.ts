import { prisma } from "@/lib/utils/prisma";

export async function POST(req: Request) {
    const body = await req.json();

    const lead = await prisma.lead.create({
        data: {
            companyName: body.companyName,
            primaryContact: body.primaryContact,
            primaryPlatform: body.primaryPlatform,
            website: body.website,
            contactDate: body.contactDate
                ? new Date(body.contactDate)
                : null,
            secondaryContact: body.secondaryContact,
            secondaryPlatform: body.secondaryPlatform,
            note: body.note
        },
    });

    return Response.json(lead);
}

export async function GET() {
    const leads = await prisma.lead.findMany({
        orderBy: { createdAt: "desc" },
    });

    return Response.json(leads);
}