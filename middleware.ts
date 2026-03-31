import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export const runtime = "nodejs";

export function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl;
    const token = req.cookies.get("auth")?.value;

    let isAuth = false;

    if (token) {
        try {
            jwt.verify(token, process.env.JWT_SECRET!);
            isAuth = true;
        } catch {
        }
    }

    if (!isAuth && pathname !== "/login") {
        return NextResponse.redirect(new URL("/login", req.url));
    }

    if (isAuth && pathname === "/login") {
        return NextResponse.redirect(new URL("/dashboard", req.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/((?!_next|api|favicon.ico).*)"],
};