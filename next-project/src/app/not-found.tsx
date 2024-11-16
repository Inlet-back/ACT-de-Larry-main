/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from 'react';
import type { Metadata } from 'next';
import "@/_style/basic.css";
import NotFound404 from "@/_components/404Component";

export const metadata: Metadata = {
  title: "404"
}

export default function NotFound() {

  return (
  <main className="h-screen flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-9xl font-bold"><NotFound404></NotFound404></h1>
      <p className="text-2xl md:text-3xl main-txt mt-4">お探しのページは存在しません。</p>
      <p className="main-txt mt-2">自動的にホームに戻ります。</p>
      <Link href="/" className="mt-6 inline-block shadow-md text-4xl transition duration-300 basic-btn">戻る</Link>
    </div>
  </main>
  );
}
