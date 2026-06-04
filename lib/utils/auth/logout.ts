'use server'

import { cookies } from "next/headers";

export default async function logout() {
    const cookieStore = await cookies();

    cookieStore.set("auth", "", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        path: "/",
        expires: new Date(0),
    });

    return {
        success: true,
    };
}