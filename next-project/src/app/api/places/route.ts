import { prisma } from "@/prisma";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  //ユーザーの会社に属する工場の一覧
  const places = await prisma.place.findMany({});
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

export const getPlaces = async () => {
  //ユーザーの会社に属する工場の一覧
  const places = await prisma.place.findMany({
    select: {
      id: true,
      projects: true,
      location: true,
      users: true,
    }
  });
  if (!places) {
    return null;
  }
  return places;
};

export const getPlacesSameLocation = async (location: string) => {
  //ユーザーの会社に属する工場の一覧
  const places = await prisma.place.findMany({
    where: {
      location: location,
    },
    select: {
      id: true,
      projects: true,
      location: true,
      users: true,
    }
  });
  if (!places) {
    return null;
  }
  return places;
};

export const getPlace = async (location: string) => {
  //ユーザーの会社に属する工場の一覧
  const places = await prisma.place.findMany({
    where: {
      location: location,
    },
    select: {
      id: true,
      projects: true,
      location: true,
      users: true,
    }
  });
  if (!places) {
    return null;
  }
  for(const place of places) {
    if(place.location === location) {
      return place;
    }
  }
  return null;
};

export const setPlaces = async (request: NextRequest) => {
  const body = await request.json();

  try {
    const place = await prisma.place.create({
      data: {
        location: body.location,
      },
    });

    return place;
  } catch (error) {
    if (
      error instanceof PrismaClientKnownRequestError &&
      error.code === "P2025"
    ) {
      return null;
    }
    console.log(error);
    return null;
  }
};

export const addUserToPlace = async (request: {placeId: string, userId: string}) => {
  const body = await request;
  const { placeId, userId } = body; // 追加したいユーザーIDと場所を受け取る

  try {
    const updatedPlace = await prisma.place.update({
      where: {
        id: placeId, // 更新したい場所を指定
      },
      data: {
        users: {
          connect: { id: userId }, // 新しいユーザーを接続
        },
      },
    });

    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};
