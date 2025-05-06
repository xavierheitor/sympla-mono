import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import bcrypt from "bcrypt";
import { prisma } from "@/lib/db/prisma";

const handler = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: {
          label: "Usuário",
          type: "text",
          placeholder: "Digite seu usuário",
        },
        password: {
          label: "Senha",
          type: "password",
          placeholder: "Digite sua senha",
        },
      },
      async authorize(credentials) {
        const { username, password } = credentials as {
          username: string;
          password: string;
        };

        const user = await prisma.user.findUnique({
          where: {
            username: username,
          },
        });

        if (!user) throw new Error("Usuário não encontrado!");

        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) throw new Error("Usuário ou senha inválidos!");

        return {
          id: user.id.toString(),
          username: user.username,
          email: user.email ?? "",
        };
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 60 * 60, // 1 hora
    updateAge: 30 * 60, // Atualizar sessão a cada 30 minutos
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.username = user.username;
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id;
        session.user.username = token.username;
        session.user.email = token.email;
      }
      return session;
    },
    async signIn() {
      return true;
    },
    async redirect({ baseUrl }) {
      return baseUrl;
    },
  },
  pages: {
    signIn: "/login",
    error: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
});

export { handler as GET, handler as POST };
