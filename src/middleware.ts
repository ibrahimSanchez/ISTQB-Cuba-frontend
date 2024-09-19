import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { isExpired } from 'react-jwt';

export function middleware(req: NextRequest) {

    const userAuth = JSON.parse(req.cookies.get('USER_AUTH')?.value || '');
    const expiredToken = isExpired(userAuth?.tokenAccess);

    const requestedPage = req.nextUrl.pathname;
    const url = req.nextUrl.clone();

    // restricciones por no estar autenticado
    if (expiredToken && !requestedPage.includes('/auth')) {
        url.pathname = `/auth/login`;
        url.search = `p=${requestedPage}`;
        return NextResponse.redirect(url);
    }

    // restricciones por roles
    if (
        ((userAuth?.role != 'ADMIN_ROLE' && requestedPage.includes('/admin')) ||
            (userAuth?.role != 'PROFESOR_ROLE' && requestedPage.includes('/profesor')))) {

        url.pathname = `/unauthorized`;
        url.search = `p=${requestedPage}`;
        return NextResponse.redirect(url);
    }

    // restricciones por estar autenticado
    if (!expiredToken && requestedPage.includes('/auth')) {

        url.pathname = `/`;
        url.search = `p=${requestedPage}`;
        return NextResponse.redirect(url);
    }

    return NextResponse.next();
}


export const config = {
    matcher: [
        '/admin/:path*',
        '/profesor/:path*',
        '/certification/:id/reservation',
        '/auth/:path*',
        '/notifications/:path*'
    ]
};

