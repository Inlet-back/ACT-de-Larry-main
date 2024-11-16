// "use client";
// import { useSession } from "next-auth/react";
// import Login from "./_components/Login";
// import Logout from "./_components/Logout";

// export default function Home() {
//   const { data: session, status } = useSession();
//   return (
//     <div>
//       {status === "authenticated" ? (
//         <div>
//           <p>セッションの期限：{session.expires}</p>
//           <p>ようこそ、{session.user?.name}さん</p>
//           <img
//             src={session.user?.image ?? ``}
//             alt=""
//             style={{ borderRadius: "50px" }}
//           />
//           <div>
//             <Logout />
//           </div>
//         </div>
//       ) : (
//         <Login />
//       )}
//     </div>
//   );
// import Image from "next/image";
import { redirect } from "next/navigation";
import { isLogined } from "@/_utils/sessions";

export default function Home() {
  // let logined: boolean = await isLogined();
  // const router = useRouter();
  // if (!logined) router.push("/login");
  redirect("/home");
}
