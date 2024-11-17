import { auth } from "@/auth";
import { prisma } from "@/prisma";
import { Place, Prisma, Project } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (/*request: NextRequest*/) => { // 使ってないからコメントアウトしました。 by DoLonaAnd
  const users = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      image: true,
      email: true,
      places: true,
      projects: true,
      clearedFlag: true,
      reachedTheGarageFlag: true,
      administrator: true,
    },
  });
  if (!users) {
    return NextResponse.json(
      { message: "データが見つかりませんでした" },
      { status: 404 }
    );
  }
  return NextResponse.json(users);
};
