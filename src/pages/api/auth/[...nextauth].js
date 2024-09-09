import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const GOOGLE_OAUTH_ID = process.env.GOOGLE_OAUTH_ID;
const GOOGLE_OAUTH_SECRET = process.env.GOOGLE_OAUTH_SECRET;

export const authOptions = {
  callbacks: {
    async signIn({ account, profile }) {
      if (account.provider === "google") {
        return (
          profile.email_verified && profile.email.endsWith("@one-line.com")
        );
      }
      return false;
    },
  },
  providers: [
    GoogleProvider({
      clientId: GOOGLE_OAUTH_ID,
      clientSecret: GOOGLE_OAUTH_SECRET,
      checks: "none",
      authorizationUrl:
        "https://accounts.google.com/o/oauth2/v2/auth?hd=one-line.com",
    }),
  ],
};

export default NextAuth(authOptions);
