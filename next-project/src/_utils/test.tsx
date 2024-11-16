"use client";
import { __NEXTAUTH, SessionContext, SessionContextValue, useSession } from "next-auth/react";
import { getSession } from "next-auth/react";
import getServerSession from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import React from "react";
import { UseSessionOptions } from "node_modules/next-auth/lib/client";

export async function getUserSession() {
	const session = await getSession();

	if (!session) {
		throw new Error("No active session");
	}
	return session.user;
}


export function useGoogleLogined(): boolean {
	const { status } = useSession();
	return status === "authenticated";
}

