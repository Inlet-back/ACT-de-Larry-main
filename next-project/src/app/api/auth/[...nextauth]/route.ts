import { handlers } from "../../../../auth";
// import { options } from "@/app/api/auth/[...nextauth]/authOptions";
// import NextAuth from "next-auth";

// 環境変数のログ出力
console.log("NEXTAUTH_URL:", process.env.NEXTAUTH_URL);
console.log("NEXTAUTH_SECRET:", process.env.NEXTAUTH_SECRET);
console.log("AUTH_GOOGLE_ID:", process.env.AUTH_GOOGLE_ID);
console.log("AUTH_GOOGLE_SECRET:", process.env.AUTH_GOOGLE_SECRET);
console.log("AUTH_TRUST_HOST:", process.env.AUTH_TRUST_HOST);

// const handler = NextAuth(options);
export const { GET, POST } = handlers;
