// apps/sympla-web/app/api/auth/[...nextauth]/route.ts
import NextAuth from 'next-auth/next';
import { authOptions } from '@/lib/utils/auth.config';

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };