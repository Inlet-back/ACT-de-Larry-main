import Image from "next/image";
import type { Metadata } from "next";
import "@/_style/basic.css";
import ToHome from "@/_components/toHomeButtonComponent";

export const metadata: Metadata = {
	title: "ACT de ラリー",
};
export default function Information() {
	return (
		<main className="h-screen flex items-center justify-center">
            info
			<ToHome></ToHome>
		</main>
	);
}
