import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

const PUBLIC_FILE = /\.(.*)$/;

export async function middleware(req) {
    // token if user is logged in
    const token = await getToken({ req, secret: process.env.JWT_SECRET})

    const { pathname, origin } = req.nextUrl

    if (
        pathname.startsWith("/_next") || // exclude Next.js internals
        pathname.startsWith("/api") || //  exclude all API routes
        pathname.startsWith("/static") || // exclude static files
        PUBLIC_FILE.test(pathname) // exclude all files in the public folder
      ) {
        return NextResponse.next();
      }

    if (pathname.endsWith('/api/auth' || token)) {
        return NextResponse.next()
    }

    if (!token && pathname !== '/') {
        return NextResponse.redirect(origin)
    }
}