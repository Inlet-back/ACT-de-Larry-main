import { prisma } from "@/prisma";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  const body = await request.json();
  try {
    const project = await prisma.project.create({
      data: {
        name: body.name,
      },
    });
    return NextResponse.json(project);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "エラーが発生しました" },
      { status: 500 }
    );
  }
};

export const GET = async () => {
  //ユーザーの会社に属する工場の一覧
  const project = await prisma.project.findMany({});
  if (!project) {
    return null;
  }
  return project;
};

