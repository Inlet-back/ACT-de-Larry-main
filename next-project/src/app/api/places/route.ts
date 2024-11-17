import { prisma } from "@/prisma";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {

  const places = await prisma.place.findMany({
   select: {
      id: true,
      projects: true,
      location: true,
      users: true,
    }
  });
  if (!places) {
    return NextResponse.json(
      { message: "データが見つかりませんでした" },
      { status: 404 }
    );
  }
  return NextResponse.json(places);
};

export const POST = async (request: NextRequest) => {
  const body = await request.json();

  try {
    const place = await prisma.place.create({
      data: {
        location: body.location,
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

