
import { auth } from "@/auth";
import { prisma } from "@/prisma";
import { Place, Prisma, Project } from "@prisma/client";

export const getUsersList = async () => {
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
      },});
    if (!users) {
      return null;
    }
    return users;
  };
  
  export const getUser = async (adress: string) => {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        image: true,
        email: true,
        places: true,
        projects: true,
        emailVerified: true,
        createdAt: true,
        updatedAt: true,
        clearedFlag: true,
        reachedTheGarageFlag: true,
        administrator: true,
      },});
    if (!users) {
      return null;
    }
    for(const user of users) {
      if(user.email === adress) {
        return user;
      }
    }
    return null;
  };
  
  
  export const getUserUByEmail = async (adress: string) : Promise<{
    id: string;
    name: string | null;
    image: string | null;
    email: string;
    places: Place[] | null;
    projects: Project[] | null;
    emailVerified: Date | null;
    createdAt: Date;
    updatedAt: Date;
    clearedFlag: boolean;
    reachedTheGarageFlag: boolean;
    administrator: boolean;
  } | null> => {
    const user = await prisma.user.findUnique({
      where: {
        email: adress,
      },
      select: {
        id: true,
        name: true,
        image: true,
        email: true,
        places: true,
        projects: true,
        emailVerified: true,
        createdAt: true,
        updatedAt: true,
        clearedFlag: true,
        reachedTheGarageFlag: true,
        administrator: true,
      },
    });
    return user;
  };
  
  export const getUserById = async (id: string): Promise<{
    id: string;
    name: string | null;
    image: string | null;
    email: string;
    places: Place[] | null;
    projects: Project[] | null;
    emailVerified: Date | null;
    createdAt: Date;
    updatedAt: Date;
    clearedFlag: boolean;
    reachedTheGarageFlag: boolean;
    administrator: boolean;
  } | null> => {
    const user = await prisma.user.findUnique({
      where: {
        id: id,
      },
      select: {
        id: true,
        name: true,
        image: true,
        email: true,
        places: true,
        projects: true,
        emailVerified: true,
        createdAt: true,
        updatedAt: true,
        clearedFlag: true,
        reachedTheGarageFlag: true,
        administrator: true,
      },
    });
    return user;
  };
  
  export const getMyFullUserInfo = async (): Promise<{
    id: string;
    name: string | null;
    image: string | null;
    email: string;
    places: Place[] | null;
    projects: Project[] | null;
    emailVerified: Date | null;
    createdAt: Date;
    updatedAt: Date;
    clearedFlag: boolean;
    reachedTheGarageFlag: boolean;
    administrator: boolean;
  } | null> => {
    const session = await auth();
    const fullUserInfo = (!!session && session.user?.id) ? await getUserById(session.user.id) : null;
    return fullUserInfo;
  }
  
  
  
  
  export const updateUserCleared = async (userId: string, clearNum: number) => {
    // const { userId } = request; // 追加したいユーザーIDと場所を受け取る
    const user = await prisma.user.findUnique({where:{id: userId},select: {places: true}});
    if(!!!user) return false;
    if(!(!!user && (user.places.length + 1 >= clearNum))) return false; 
    try {
      await prisma.user.update({
        where: {
          id: userId, // 更新したい場所を指定
        },
        data: {
          clearedFlag: true,
        },
      });
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };
  