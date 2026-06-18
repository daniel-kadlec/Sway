'use server'

import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export default async function login(password: string) {
    const cleanPassword = password?.trim();

    const isValid = await bcrypt.compare(
        cleanPassword,
        process.env.APP_PASSWORD_HASH!
    );

    if (!isValid) {
        return {
            success: false,
            error: "Invalid password",
        };
    }

    const token = jwt.sign(
        { role: "admin" },
        process.env.JWT_SECRET!,
        { expiresIn: "1h" }
    );

    const cookieStore = await cookies();

    cookieStore.set("auth", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        path: "/",
    });

    return {
        success: true,
    };
}