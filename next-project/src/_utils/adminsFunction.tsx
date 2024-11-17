import { getMyFullUserInfo, getUserById } from "@/app/api/users/userUtils";
import { auth } from "@/auth";
import { Prisma } from "@prisma/client";
import { Session } from "next-auth";
import { prisma } from "@/prisma";

export const getIsAdmin = async (): Promise<boolean> => {
	const userInfo = await getMyFullUserInfo();
	if (!!userInfo) return userInfo.administrator;
	return false;
};

export const switchIsAdmin = async (id: string) => {
	if (!getIsAdmin()) return false;
	const myInfo = await getMyFullUserInfo();
	if (!!myInfo && myInfo.id == id) return false;
	const userInfo = await getUserById(id);
	try {
		if (!userInfo) return false;
		await prisma.user.update({
			where: { id: id },
			data: { administrator: !userInfo.administrator },
		});
	} catch (error) {
		return false;
	}
	return true;
};

export const deleteUser = async (id: string) => {
	if (!getIsAdmin()) return false;
	const myInfo = await getMyFullUserInfo();
	if (!!myInfo && myInfo.id == id) return false;
	const userInfo = await getUserById(id);
	try {
		if (!userInfo) return false;
		await prisma.user.delete({
			where: { id: id },
		});
	} catch (error) {
		return false;
	}
	return true;
};
