import NextAuth, { NextAuthConfig, Session, User } from 'next-auth';
import { JWT } from 'next-auth/jwt';
import CogntioProvider from 'next-auth/providers/cognito';
import GoogleProvider from "next-auth/providers/google";
export interface CustomSession extends Session {
  accessToken?: string;
}

export interface ExtendedToken extends JWT {
  accessToken?: string;
  user?: User;
}

// 環境変数のログ出力
console.log("NEXTAUTH_URL:", process.env.NEXTAUTH_URL);
console.log("NEXTAUTH_SECRET:", process.env.NEXTAUTH_SECRET);
console.log("GOOGLE_CLIENT_ID:", process.env.GOOGLE_CLIENT_ID);
console.log("GOOGLE_CLIENT_SECRET:", process.env.GOOGLE_CLIENT_SECRET);
console.log("AUTH_TRUST_HOST:", process.env.AUTH_TRUST_HOST);

export const options: NextAuthConfig = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  trustHost: true, // 追加
  callbacks: {
    authorized({ request, auth }) {
      try {
        return Promise.resolve(!!auth);
      } catch (error) {
        return Promise.resolve(false);
      }
    },
    async jwt({ token, account, profile, user }) {
      const extendedToken: ExtendedToken = token as ExtendedToken;
      if (account) {
        extendedToken.accessToken = account.access_token;
      }
      if (user) {
        extendedToken.user = user; // user情報をトークンに追加
      }
      return { ...extendedToken, ...user };
    },
    async session({ session, token}) {
      const extendedToken: ExtendedToken = token as ExtendedToken;
      const customSession: CustomSession = { ...session, accessToken: extendedToken.accessToken, user: extendedToken.user, };
      return customSession;
    },
  },
  session: {
    strategy: 'jwt',
  },

  pages: {
    signIn: '/login',
  },
};

export const { handlers, auth, signIn, signOut } = NextAuth(options);

export function checkAuthorization(authData: any): boolean {
  try {
    return !!authData; // authorizedと同じロジックを使う
  } catch (error) {
    return false;
  }
}