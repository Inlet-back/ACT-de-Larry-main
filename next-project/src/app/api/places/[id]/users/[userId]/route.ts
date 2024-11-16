import { prisma } from "@/prisma";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { NextRequest, NextResponse } from "next/server";

export const PUT = async (
  request: NextRequest,
  { params }: { params: { id: string; userId: string } }
) => {
  const body = await request.json();

  //requestがplaceかprojectどちらを登録するかで処理を分ける
  try {
    const user = await prisma.user.update({
      where: {
        id: params.userId,
      },
      data: {
        places: {
          connect: {
            id: params.id,
          },
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
