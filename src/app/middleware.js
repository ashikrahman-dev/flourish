import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside

export function middleware(request) {
    const isAuthenticated = false;

    if (!isAuthenticated) {
        const url = new URL("/login", request.url);
        return NextResponse.redirect(url);
    }

    return NextResponse.next();
}

// See "Matching Paths" below to learn more

export const config = {
    matcher: ["/about", "/add-offerings"],
};
