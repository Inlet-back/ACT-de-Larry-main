import Image from "next/image";
import type { Metadata } from "next";
import "@/_style/color-scheme.css";
import "@/_style/basic.css";

export const metadata: Metadata = {
	title: "ACT de ラリー - サービス終了",
};

export default function ServiceEnd() {
	const text = "サービス終了しました。";
	return (
		<main className="h-screen flex items-center justify-center">
			<div className="text-center">
				<h2 className="text-4xl">
					{text.split("").map((char, index) => (
						<span key={index} className="color-kindai-actional">
							{char}
						</span>
					))}
				</h2>
			</div>
		</main>
	);
}
