"use client";
import React, { FC } from "react";
import { IconContext } from "react-icons";
import { FaSignOutAlt } from "react-icons/fa";
import { useSession, signIn } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";

export default function LoginButtonComponent() {
	async function handleLogin (event: React.FormEvent) {
		event.preventDefault();
		console.log("Signin with Google"); // コンソールログの追加
		await signIn("google");
	};
	const loginBtn =
		(
			<>
				<form onSubmit={handleLogin} className="basic-btn">
					<button type="submit">Signin with Google</button>
				</form>
			</>
		);

	return loginBtn;
}
