import { useEffect } from "react";
import { useRouter } from "next/navigation";

export function useLogout (){
	const router = useRouter();
	useEffect(() => {
		router.push("/");
	}, []);
};
