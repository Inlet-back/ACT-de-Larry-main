import type {} from "react/experimental";
import { signIn } from "next-auth/react";

export const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Signin with Google"); // コンソールログの追加
    await signIn("google");
};