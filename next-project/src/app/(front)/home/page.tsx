// "use client";
import Image from "next/image";
import type { Metadata } from "next";
import "@/_style/basic.css";
import NavigationButtons from "@/_components/NavigationButtons";
import { useSession } from "next-auth/react";
import Logout from "@/app/_components/Logout";
import { isLogined } from "@/_utils/sessions";
import { redirect, useRouter } from "next/navigation";

// export const metadata: Metadata = {
// 	title: "ACT de ラリー",
// };
export default async function Home() {
  //const { data: session, status } = useSession();
  // const router = useRouter();
  
  // if(!await isLogined()){
  //   redirect("/login");
  // }
  const buttons = [
    { label: 'ログイン', href: 'login'},
    { label: '遊び方', href: 'playing-manual'},
    { label: 'マイページ', href: 'mypage'},
    { label: '管理者ページ', href: 'admin'},
  ];
  return (
    <main className="h-screen flex items-center justify-center">
        <NavigationButtons btnsInfo={buttons}></NavigationButtons>
    </main>
  );
}
