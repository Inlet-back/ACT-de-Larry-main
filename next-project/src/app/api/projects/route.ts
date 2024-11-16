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

export const getPJByName = async (name: string) => {
  const project = (await prisma.project.findMany({
    where: {
      name: name,
    },
    select: {
      id: true,
      name: true,
      Place: {
        select: {
          id: true,
          location: true
        },
      },
    },
  }))[0];
  if (!project) {
    return null;
  }
  return project;
}

export const updateProjectsPlace = async (pjId:string, placeId: string) => {
  // const { locationId } = request; // 追加したいユーザーIDと場所を受け取る
  const project = await prisma.project.findUnique({where:{id: pjId}, select: {name: true}},);
  
  if(!!!project || project.name === "無所属") return false; 
  try {
    await prisma.project.update({
      where: {
        id: pjId, // 更新したい場所を指定
      },
      data: {
        Place: {
          connect: { id: placeId },
        }
      },
    });
    return true;
  } catch (error) {
    console.error("---" + project.name + ": ダメー！---");
    return false;
  }
};
