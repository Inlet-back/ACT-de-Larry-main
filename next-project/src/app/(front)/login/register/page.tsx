import Image from "next/image";
import type { Metadata } from 'next';
import "@/_style/basic.css";
import ToHome from "@/_components/toHomeButtonComponent";
 
export const metadata: Metadata = {
  title: "ACT de ラリー - ログイン"
}

export default function Login() {
  return (
    <main className="h-screen flex items-center justify-center">
        <p className="main-txt basic-btn text-9xl">Googleで新規登録</p>
        <select name="assign-act">
            <option>ACT126-KINDAI-InfoTech-HUB</option>
            <option>ACT412-近大Vproject</option>
        </select>
    </main>
  );
}
