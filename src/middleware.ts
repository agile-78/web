import { withAuth } from "next-auth/middleware";
export default withAuth(function middleware(req) {}, {
  callbacks: {
    authorized: ({ req, token }) => {
      if (
        !req.nextUrl.pathname.startsWith("/auth") &&
        token === null &&
        req.nextUrl.pathname !== "/"
      ) {
        return false;
      }
      return true;
    },
  },
});
