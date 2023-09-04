// import { authenticate } from "@/services/authService"
import { authenticate } from "@/services/authService";
import NextAuth from "next-auth";
import type { AuthOptions } from "next-auth";
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

          const data = res.data;

          if (typeof res !== "undefined") {
            if (res.status === 200 && res.data)
              return {
                ...data,
                apiToken: data.token,
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
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
