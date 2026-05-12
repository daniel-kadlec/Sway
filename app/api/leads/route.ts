import { prisma } from "@/lib/prisma";

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
            status: body.contactDate ? "ACTIVE" : "IDLE",
            primaryContactAt: body.contactDate
                ? new Date(body.contactDate)
                : null,
        },
    });

    return Response.json(lead);
}
export async function GET() {
    const leads = await prisma.lead.findMany({
        orderBy: {
            createdAt: "desc",
        },
    });
    return Response.json(leads);}

export async function DELETE(req: Request) {
    const body = await req.json();

    const lead = await prisma.lead.delete({
        where: {
            id: body.id,
        },
    });

    return Response.json(lead);
}

export async function PUT(req: Request) {

}