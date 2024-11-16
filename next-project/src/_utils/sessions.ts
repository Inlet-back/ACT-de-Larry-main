/* eslint-disable */
import { useSession } from "next-auth/react";
import { getSession } from "next-auth/react";
import getServerSession from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export async function getUserSession() {
	const session = await getSession();

	if (!session) {
		throw new Error("No active session");
	}
	return session.user;
}

// export async function isLogined(): Promise<boolean> {
// 	// const { status } = useSession();
// const session = await getServerSession({
// 	providers: [
// 		GoogleProvider({
// 			clientId: process.env.GOOGLE_CLIENT_ID!,
// 			clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
// 		}),
// 	],
// });
// 	console.log("====================================");
// 	console.log(session);
// 	console.log("====================================");
// 	//return status === "authenticated";
// 	return !!session;
// }

export async function isLogined(): Promise<boolean> {
	const { data: session, status } = useSession();
	return status === "authenticated";
	// const session = await getServerSession({
	// 	providers: [
	// 		GoogleProvider({
	// 			clientId: process.env.GOOGLE_CLIENT_ID!,
	// 			clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
	// 		}),
	// 	],
    //     callbacks: {
    //         async session({ session, token }: { session: any, token: any}) {
    //           // セッションにユーザーの情報を追加
    //           session.user.id = token.sub; // ユーザーIDをセッションに追加
    //           session.user.email = token.email; // メールアドレスをセッションに追加
    //           return session;
    //         },
    //         async jwt({ token, user }) {
    //           // ユーザーがログインした際にトークンに情報を追加
    //           if (user) {
    //             token.email = user.email; // メールアドレスをトークンに追加
    //             token.sub = user.id; // ユーザーIDをトークンに追加
    //           }
    //           return token;
    //         },
    //     }
	// });
    // console.log("====================================");
    // console.log(session);
    // return !!session || session.user.role === "authenticated";
}
