"use client"
import { usePathname } from "next/navigation";

export default function CurrentUrl(){
    const pathname = usePathname();
    return (
        <h1>
            {pathname}
        </h1>
    );
}
