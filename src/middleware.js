/* eslint-disable react-hooks/rules-of-hooks */
// import { NextResponse } from "next/server";

// import { NextRequest, NextResponse } from "next/server";

// // This function can be marked `async` if using `await` inside

// export function middleware(request) {
//     const isAuthenticated = true;

//     if (!isAuthenticated) {
//         const url = new URL("/login", request.url);
//         return NextResponse.redirect(url);
//     }

//     return NextResponse.next();
// }

// // See "Matching Paths" below to learn more

// export const config = {
//     matcher: ["/add-offerings"],
// };

"use client";

import { NextResponse } from "next/server";

export function middleware(request) {
    let cookie = request.cookies.get("nextjs");
    console.log(cookie);
    const allCookies = request.cookies.getAll();
    console.log(allCookies);

    return NextResponse.redirect(new URL("/login", request.url));
}

export const config = {
    matcher: ["/contact"],
};
