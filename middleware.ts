import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
    const isAuth = req.cookies.get("auth");

    if (!isAuth && req.nextUrl.pathname !== "/login") {
        return NextResponse.redirect(new URL("/login", req.url));
    }
    if (isAuth && req.nextUrl.pathname == "/login") {
        return NextResponse.redirect(new URL("/dashboard", req.url));
    }

    return NextResponse.next();
}
export const config = {
    matcher: [
        /*
         * Match all request paths except:
         * - _next (Next.js internals)
         * - api (optional, but usually excluded)
         * - static files (images, etc.)
         */
        "/((?!_next|api|favicon.ico).*)",
    ],
};