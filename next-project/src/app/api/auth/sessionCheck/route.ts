// src/app/api/auth/sessionCheck/route.ts

import { NextResponse } from "next/server";
import { getSession, getUserEmail, isAuthenticated } from "./sessionUtils";

export async function GET() {
  const session = await getSession();
  return NextResponse.json(session);
}