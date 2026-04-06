import { PrismaClient } from "@/lib/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

const connectionString = process.env.DATABASE_URL!;

const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });
export async function POST(req: Request) {
    const body = await req.json();

    const lead = await prisma.lead.create({
        data: {
            name: body.name,
            email: body.email,
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