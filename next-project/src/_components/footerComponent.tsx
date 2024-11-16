"use client"
import Image from "next/image";
import Link from 'next/link';
import React from 'react';
import ExIComponent from '@/_components/exImageComponent';
import "@/_style/footer.css";

export default function Footer() {
    return (
        <footer onContextMenu={ (e) => {e.preventDefault();}}>
            <Link href="https://act.kindai.ac.jp/" target="_blank">
                <ExIComponent src={"https://act.kindai.ac.jp/academic-theater/common/img/common/logo-academic-head.svg"} alt="アカデミックシアターロゴ" className="footer-logo"/>
            </Link>
        </footer>
    );
}
