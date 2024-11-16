import Image from "next/image";
import type { Metadata } from 'next';
import "@/_style/basic.css";
import ToHome from "@/_components/toHomeButtonComponent";
 
export const metadata: Metadata = {
  title: "ACT de ラリー - リザルト"
}

export default function Result() {
  return (
    <main className="h-screen .main items-center justify-center">
        result
        <ToHome></ToHome>
    </main>
  );
}
