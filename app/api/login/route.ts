import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
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
    const token = jwt.sign({ role: "admin" }, process.env.JWT_SECRET!, {
        expiresIn: "1h",
    });

    const response = NextResponse.json({ success: true });

    response.cookies.set("auth", token, {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        path: "/",
    });

    return response;
}