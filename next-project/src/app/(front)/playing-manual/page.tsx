import Image from "next/image";
import type { Metadata } from 'next';
import "@/_style/basic.css";
import ToHome from "@/_components/toHomeButtonComponent";
 
export const metadata: Metadata = {
  title: "ACT de ラリー - 遊び方"
}

export default function PlayingManual() {
  return (
    <main className="h-screen flex items-center justify-center">
        <p>test</p>
        <ToHome></ToHome>
    </main>
  );
}
