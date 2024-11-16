// src/app/api/auth/sessionCheck/route.ts

import getServerSession, { NextAuthResult } from "next-auth";
import { auth } from "@/auth"
import { CustomSession, ExtendedToken, options, checkAuthorization } from "../[...nextauth]/authOptions"; // authOptionsをインポート
import { NextResponse } from "next/server";

export async function getSession() {
	const session = await auth();
	if (session && session.user && session.user.email) {
		return { authentication: "Authenticated", session: session };
	} else {
		return { authentication: "Not authenticated", session: null };
	}
}

export async function getUserEmail() {
  const session = await auth();
  if (session && session.user && session.user.email) {
    return session.user.email;
  } else {
    return "example@example.com";
  }
}

export async function isAuthenticated(){
  return await getSession().then((session) => session?.authentication === "Authenticated");
}