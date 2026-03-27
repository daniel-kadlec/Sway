import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const { password } = await req.json();
    const cleanPassword = password.trim();

    const isValid = await bcrypt.compare(
        cleanPassword,
        process.env.APP_PASSWORD_HASH!
    );

    if (!isValid) {
        return NextResponse.json({ error: "Invalid password" }, { status: 401 });
    }

    const response = NextResponse.json({ success: true });

    response.cookies.set("auth", "true", {
        httpOnly: true,
        secure: true,
        path: "/",
    });

    return response;
}