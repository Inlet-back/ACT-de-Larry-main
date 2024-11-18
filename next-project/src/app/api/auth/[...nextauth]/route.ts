import { handlers } from "../../../../auth";
// import { options } from "@/app/api/auth/[...nextauth]/authOptions";
// import NextAuth from "next-auth";

// 環境変数のログ出力
console.log("NEXTAUTH_URL:", process.env.NEXTAUTH_URL);
console.log("NEXTAUTH_SECRET:", process.env.NEXTAUTH_SECRET);
console.log("GOOGLE_CLIENT_ID:", process.env.GOOGLE_CLIENT_ID);
console.log("GOOGLE_CLIENT_SECRET:", process.env.GOOGLE_CLIENT_SECRET);
console.log("AUTH_TRUST_HOST:", process.env.AUTH_TRUST_HOST);

// const handler = NextAuth(options);
export const { GET, POST } = handlers;
