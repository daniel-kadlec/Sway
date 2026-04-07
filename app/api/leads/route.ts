import { prisma } from "@/lib/utils/prisma";

export async function POST(req: Request) {
    const body = await req.json();

    const lead = await prisma.lead.create({
        data: {
            name: body.name,
            notes: body.notes,
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