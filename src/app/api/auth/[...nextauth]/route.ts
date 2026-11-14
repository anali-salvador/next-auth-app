import NextAuth, { type NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";

const MAX_ATTEMPTS = 5;
const LOCK_MINUTES = 15;

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    CredentialsProvider({
      name: "Credenciales",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Contraseña", type: "password" },
      },
      async authorize(credentials) {
        const email = credentials?.email?.trim().toLowerCase();
        const password = credentials?.password;
        if (!email || !password) throw new Error("Credenciales inválidas");

        const user = await prisma.user.findUnique({ where: { email } });
        if (!user) throw new Error("Credenciales inválidas");

        if (user.lockedUntil && user.lockedUntil > new Date()) {
          const minutes = Math.ceil(
            (user.lockedUntil.getTime() - Date.now()) / 60000
          );
          throw new Error(`Cuenta bloqueada, intenta en ${minutes} minutos`);
        }

        const valid = await bcrypt.compare(password, user.password);
        if (!valid) {
          const attempts = user.failedAttempts + 1;
          const lock = attempts >= MAX_ATTEMPTS;
          await prisma.user.update({
            where: { id: user.id },
            data: {
              failedAttempts: lock ? 0 : attempts,
              lockedUntil: lock
                ? new Date(Date.now() + LOCK_MINUTES * 60000)
                : null,
            },
          });
          if (lock) {
            throw new Error(`Cuenta bloqueada, intenta en ${LOCK_MINUTES} minutos`);
          }
          throw new Error("Credenciales inválidas");
        }

        await prisma.user.update({
          where: { id: user.id },
          data: { failedAttempts: 0, lockedUntil: null },
        });

        return { id: user.id, name: user.name, email: user.email };
      },
    }),
  ],
  session: { strategy: "jwt" },
  pages: { signIn: "/signIn" },
  callbacks: {
    async jwt({ token, user, account }) {
      if (user) token.id = user.id;
      if (account) token.provider = account.provider;
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id ?? token.sub ?? "";
        session.user.provider = token.provider;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
