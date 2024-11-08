import next from 'next';
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {

    const token = request.cookies.get("refreshToken");
    const url = request.nextUrl;

    const protectedPaths = ['/login', '/register'];

    if (protectedPaths.includes(url.pathname)) {
        if (token) {
            const previousUrl = url.searchParams.get(`/`) || `/`;
            const redirectUrl = new URL(previousUrl, request.url);
            return NextResponse.redirect(redirectUrl);
        }
    }

    if (!token && !protectedPaths.includes(url.pathname)) {
        url.pathname = '/login';
        return NextResponse.redirect(url);
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
};