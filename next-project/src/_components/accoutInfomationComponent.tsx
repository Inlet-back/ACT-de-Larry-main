"use client";
import React from "react";
import { IconContext } from "react-icons";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import "@/_style/accountInfo.css";

export default function AccountInfomationComponent() {
	const { data: session, status } = useSession();
	const component = (
		<div>
			{status === "authenticated" ? (
				<div className="account-info">
					<div className="account-info__grid">
						<img
							src={session.user?.image ?? ""}
							alt="User Icon"
							className="account-info__icon"
						/>
						<div className="account-info__details">
							<h3 className="account-info__username">
								{session.user?.name}
							</h3>
							<p className="account-info__email">{session.user?.email}</p>
						</div>
					</div>
				</div>
			) : (
				// <div>
				// 	<p>セッションの期限：{session.expires}</p>
				// 	<p>ようこそ、{session.user?.name}さん</p>
				// 	<Image src={session.user?.image ?? ``} alt=""/>
				// </div>
				<>
					<p>Authentication Error!!</p>
					<Link href="/">トップへ戻る</Link>
				</>
			)}
		</div>
	);
    return component;
}
