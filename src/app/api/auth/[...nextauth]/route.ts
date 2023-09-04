import { authenticate } from "@/services/authService";
import NextAuth from "next-auth";
import type { AuthOptions } from "next-auth";
import { JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        if (typeof credentials !== "undefined") {
          const res = await authenticate(
            credentials.email,
            credentials.password
          );

          if (!res) {
            return null;
          }

          const { token, ...data } = res.data;

          if (typeof res !== "undefined") {
            if (res.status === 200 && res.data)
              return {
                ...data,
                apiToken: token,
              };
          } else {
            return null;
          }
        } else {
          return null;
        }
      },
    }),
  ],
  session: { strategy: "jwt" },
  pages: {
    signIn: "/auth/login",
    newUser: "/home",
    error: "/auth",
  },
  callbacks: {
    async session({ session, token, user }) {
      const sanitizedToken = Object.keys(token).reduce((p, c) => {
        // strip unnecessary properties
        if (c !== "iat" && c !== "exp" && c !== "jti" && c !== "apiToken") {
          return { ...p, [c]: token[c] };
        } else {
          return p;
        }
      }, {});

      return {
        ...session,
        user: sanitizedToken,
        apiToken: token.apiToken,
      };
    },
    async jwt({ token, user }) {
      if (typeof user !== "undefined") {
        return user as unknown as JWT;
      }

      return token;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
