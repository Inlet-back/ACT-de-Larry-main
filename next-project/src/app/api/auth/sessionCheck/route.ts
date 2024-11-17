// src/app/api/auth/sessionCheck/route.ts

import { NextResponse } from "next/server";
import { getSession, getUserEmail, isAuthenticated } from "./sessionUtils";

export async function GET() {
  const session = await getSession();
  const email = await getUserEmail();
  const auth = await isAuthenticated();
  return NextResponse.json({session, email, auth});
}