"use client";

import Image from "next/image";
import React, { use, useEffect } from "react";
import { IconContext } from "react-icons";
import { FaSignOutAlt } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Link from "next/link";

import logoRally from "@/../public/logo/logo-rally.png";
import "@/_style/header.css";

import { isLogined } from "@/_utils/sessions";
import LogoutButtonComponent from "./logoutButtonComponent";

// function Logout(){
//     const router = useRouter();
//     alert("Logout.");
//     router.push("/login");
// }

export default async function Header() {
  // console.log('========= Checked session ==========');
  // console.log(await isLogined());
  // console.log('====================================');
  const logoutBtn = LogoutButtonComponent();

  return (
    <header onContextMenu={ (e) => {e.preventDefault();}}>
      <Link href="/">
        <Image
          src={logoRally}
          alt="ACT de ラリー ロゴ"
          className="header-logo"
          priority={true}
          layout="responsive"
        />
      </Link>
      {/* <ExIComponent
        src={
          "https://act.kindai.ac.jp/academic-theater/common/img/common/logo-academic-head.svg"
        }
        alt="アカデミックシアターロゴ"
        className="header-logo"
      /> */}
      {logoutBtn}
    </header>
  );
}
