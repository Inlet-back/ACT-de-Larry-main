"use client"
import React from 'react';
import Link from 'next/link';
import "@/_style/basic.css";
import { useSession } from 'next-auth/react';

interface BtnInfo {
    label: string, 
    href: string
}

interface NavigationButtonsProps {
    btnsInfo: BtnInfo[];
  }

export default function NavigationButtons ({btnsInfo}: NavigationButtonsProps) {


    const admins = [
        "dolonaand@gmail.com",
    ];
    const { data:session, status } = useSession();
    return (
        <div className="text-center navigation-btns" onContextMenu={ (e) => {e.preventDefault();}}>
            {btnsInfo.map((button, index) => (
                (((button.label == "ログイン") && (status === "authenticated")) || ((button.label== "読み込む" || button.label=="マイページ") && (status != "authenticated"))||((button.label == "管理者ページ") && (!admins.includes(!!session?.user?.email ? session.user.email : "none")))) ?
                    (<></>):
                    (<Link key={index} href={button.href} passHref className='text-6xl'>
                    <button className="basic-btn button-column">{button.label}</button>
                    </Link>)
            ))}
        </div>
    );
};