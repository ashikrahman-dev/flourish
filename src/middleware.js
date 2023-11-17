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

export function middleware(request, response) {
    console.log("This is Middleware");
}
