"use client";
import React from "react";
import { IconContext } from "react-icons";
import { FaSignOutAlt } from "react-icons/fa";
import { useSession, signOut } from "next-auth/react";

export default function LogoutButtonComponent() {
	const { data: session, status } = useSession();
	const logoutBtn = (status==="authenticated") ? (
		<button className="logout-btn" onClick={() => signOut()} title="logout">
			<IconContext.Provider
				value={{ color: "--color-rgb-start", size: "5.0vh" }}
			>
				<FaSignOutAlt />
			</IconContext.Provider>
		</button>
	):<></>;

    return logoutBtn;
}
