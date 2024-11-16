"use client"; // Add this directive

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // useRouterをimport
import "@/_style/basic.css";

export default function MyComponent() {
	const [count, setCount] = useState(0);
	const router = useRouter(); // useRouterを使用してルーティング

	useEffect(() => {
		const timer = setInterval(() => {
			setCount((prev) => prev + 1);
		}, 1);
		if (count === 404) {
			clearInterval(timer); // カウントが404に達したらタイマーを停止
			const timeout = setTimeout(() => {
				router.push('/'); // ホームページにリダイレクト
			}, 5000); // 10秒待つ
		}

		return () => clearInterval(timer); // クリーンアップ関数
	}, [count, router]); // countとrouterが変わるとエフェクトが再実行される

	return (
		<div className="error-code" onContextMenu={ (e) => {e.preventDefault();}}>
			{count.toString().split("").map((char, index) => (
				<span key={index} className="color-kindai-actional">
					{char}
				</span>
			))}
		</div>
	);
}
