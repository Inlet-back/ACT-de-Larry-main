import { prisma } from "@/prisma";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    const place = await prisma.place.findUnique({
      where: {
        id: params.id,
      },
    });
    return NextResponse.json(place);
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

  //requestがplaceかprojectどちらを登録するかで処理を分ける
  try {
    const place = await prisma.place.update({
      where: {
        id: params.id,
      },
      data: {
        users: {
          connect: {
            id: body.placeId,
          },
        },
      },
    });

    if (place === undefined) {
      return NextResponse.json(
        { message: "データが見つかりませんでした" },
        { status: 404 }
      );
    }

    return NextResponse.json(place);
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
