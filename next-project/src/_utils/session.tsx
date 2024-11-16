"use client";

import { useSession } from "next-auth/react"

export function useStatus(): {isAuthenticated: boolean, isLoading: boolean}{
    const { status } = useSession();
    const isLoading = status === "loading";
    const isAuthenticated = status === "authenticated";

    return { isAuthenticated, isLoading};
}