import type { Metadata } from "next";
import "@/_style/basic.css";
import { redirect, useRouter } from "next/navigation";

import LoginButtonComponent from "@/_components/loginButtonComponent";
import { isAuthenticated } from "@/app/api/auth/sessionCheck/route";

export const metadata: Metadata = {
  title: "ACT de ラリー - ログイン",
};

export default async function Login() {
	// const session = await getServerSession(
	//   {
	//     providers: [
	//       		GoogleProvider({
	//       			clientId: process.env.GOOGLE_CLIENT_ID!,
	//       			clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
	//       		}),
	//       	],
	//         adapter: PrismaAdapter(client);
	//             callbacks: {
	//                 async session({ session, token }: { session: any, token: any}) {
	//                   // セッションにユーザーの情報を追加
	//                   session.user.id = token.sub; // ユーザーIDをセッションに追加
	//                   session.user.email = token.email; // メールアドレスをセッションに追加
	//                   return session;
	//                 },
	//                 async jwt({ token, user }) {
	//                   // ユーザーがログインした際にトークンに情報を追加
	//                   if (user) {
	//                     token.email = user.email; // メールアドレスをトークンに追加
	//                     token.sub = user.id; // ユーザーIDをトークンに追加
	//                   }
	//                   return token;
	//                 },
	//             }
	//   }
	// );

	// デバッグ: セッションの内容をコンソールに出力
	// console.log("Session:", session);
	//if(await isLogined()) redirect("/");
	// const { data: session, status } = useSession();
	// const router = useRouter();
	// console.log(status);
	// console.log(status === "authenticated");
	// if (status === "authenticated") {
	// //   // ログイン済みの場合はTOPページにリダイレクト
	// //   if (typeof window !== "undefined") {
	//         // window.location.href = "/";
	//         router.push("");
	// //   }
	// //   return null;
	// }
	// const handleLogin = async (event: React.FormEvent) => {
	//   event.preventDefault();
	//   console.log("Signin with Google"); // コンソールログの追加
	//   await signIn("google");
	// };

	// const { status } = useSession();
	// const router = useRouter();

	// if(status === "authenticated") router.push("/");

  // const {isAuthenticated, isLoading} = useStatus();
	// const {status} = useSession();
	// const router = useRouter();

	// if (status === "authenticated") router.push("/");
	// if (isAuthenticated) console.log(isAuthenticated, isLoading)//router.push("/");
  const status = await isAuthenticated();
  if(status) redirect("/");
  
	return (
		<main className="h-screen flex items-center justify-center">
			<LoginButtonComponent></LoginButtonComponent>
		</main>
	);
}
