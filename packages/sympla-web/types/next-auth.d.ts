// packages/sympla-web/types/next-auth.d.ts
// import NextAuth from "next-auth";

import "next-auth";

declare module "next-auth" {
  interface User {
    id: string;
    username: string;
    email: string;
  }

  interface Session {
    user: User;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    username: string;
    email: string;
  }
}
