import { prisma } from "@/prisma";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  request: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: params.id,
      },
    });
    return NextResponse.json(user);
  } catch (error) {
    if (
      error instanceof PrismaClientKnownRequestError &&
      error.code === "P2025"
    ) {
      return NextResponse.json(
        { message: "データが見つかりませんでした" },
        { status: 404 }
      );
    }

    console.log(error);
    return NextResponse.json(
      { message: "エラーが発生しました" },
      { status: 500 }
    );
  }
};

export const PUT = async (
  request: NextRequest,
  { params }: { params: { id: string } }
) => {
  const body = await request.json();

  try {
    const user = await prisma.user.update({
      where: {
        id: params.id,
      },
      data: {
        projects: {
          connect: body.projects.map((projectId: string) => ({
            id: projectId,
          })),
        },
      },
    });

    if (user === undefined) {
      return NextResponse.json(
        { message: "データが見つかりませんでした" },
        { status: 404 }
      );
    }

    return NextResponse.json(user);
  } catch (error) {
    if (
      error instanceof PrismaClientKnownRequestError &&
      error.code === "P2025"
    ) {
      return NextResponse.json(
        { message: "データが見つかりませんでした" },
        { status: 404 }
      );
    }

    console.log(error);
    return NextResponse.json(
      { message: "エラーが発生しました" },
      { status: 500 }
    );
  }
};
