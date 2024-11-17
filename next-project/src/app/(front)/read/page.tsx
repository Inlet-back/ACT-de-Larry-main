
import type { Metadata } from "next";
import { useRouter } from "next/navigation";

import "@/_style/basic.css";
import ToHome from "@/_components/toHomeButtonComponent";
import RoomModal from "@/_components/roomModal";
import NotFound from "@/app/not-found";
import { getPlace, addUserToPlace, getPlacesSameLocation } from "@/app/api/places/placeUtils";
import { getUser, updateUserCleared } from "@/app/api/users/userUtils";
import { getUserEmail, getSession } from "@/app/api/auth/sessionCheck/sessionUtils";

export const metadata: Metadata = {
  title: "ACT de ラリー - ログイン",
};

interface Props {
  searchParams: { [key: string]: string | string[] | undefined };
}

const clearNum: number = 5;

export default async function Read({ searchParams }: Props) {
  // クエリパラメータを取得
  if ((await getSession()).authentication === "Authentication") return <NotFound></NotFound>;
  const token = searchParams?.token || "";
  if (token.length == 0) return <NotFound></NotFound>;
  const location = typeof token === "string" ? token : token[0];
  const email = await getUserEmail();
  const user = await getUser(email);
  if (!!user) {
    for (const place of user.places) {
      if (place.location === location) {
        return <NotFound></NotFound>;
        // 読み込み済み
      }
    }
  }
  if (!!!location) return <NotFound></NotFound>;
  const places = await getPlacesSameLocation(location);
  if (!places || places.length == 0) return <NotFound></NotFound>;
  if (!!user) {
    for (const place of places) {
      addUserToPlace({ placeId: place.id, userId: user.id }).then(() => {
        if (!!user && user?.places.length + 1 >= clearNum) {
          console.log("クリア！");
          updateUserCleared(user.id, clearNum);
        }
      });
    }
  }

  return (
    <main className="h-screen flex items-center justify-center">
      <RoomModal roomId={Number(location)}></RoomModal>
      <ToHome></ToHome>
    </main>
  );
}