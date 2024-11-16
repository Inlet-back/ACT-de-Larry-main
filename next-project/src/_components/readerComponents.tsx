"use client"

import { useSearchParams, usePathname } from "next/navigation";

export default function ReaderComponent(){
    return (
        <div>
            <h1 className="text-5xl basic-btn">localhost:3000{usePathname()}?token={useSearchParams().get("token")}</h1>
        </div>
    );
}