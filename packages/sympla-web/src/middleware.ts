import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET || 'secret',
  });

  const isAuthenticated = !!token;
  const userId = token?.id;

  // Log de acesso
  try {
    await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/api/log`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'access',
        message: `Acesso a rota ${request.nextUrl.pathname}`,
        data: {
          method: request.method,
          pathname: request.nextUrl.pathname,
          userId,
          timestamp: new Date().toISOString(),
        },
      }),
    });
  } catch (err) {
    // Logs silenciosos em caso de falha de log
    console.error('[MIDDLEWARE_LOG_ERROR]', err);
  }

  if (!isAuthenticated) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*'],
};