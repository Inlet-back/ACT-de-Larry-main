import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
// import App, { AppProps, AppContext } from 'next/app';
// import Endo from "@/../public/endo-1.png";
// import { ThemeToggle } from "@/_components/theme-toggle";
import "./globals.css";
import "@/_style/basic.css";
import "@/_style/color-scheme.css";
import "@/_style/header.css";
import "@/_style/footer.css";
import dynamic from "next/dynamic";
import NextAuthProvider from "@/providers/NextAuth";

const Header = dynamic(() => import("@/_components/headerComponent"), {
  loading: () => <header>Loading Image...</header>,
});

const Footer = dynamic(() => import("@/_components/footerComponent"), {
  loading: () => <footer>Loading Image...</footer>,
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ACT de ラリー",
  description:
    "近畿大学 アカデミックシアター オープンACT用スタンプラリーアプリ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon-1600.png" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png"></link>
        <link rel="manifest" href="/manifest.webmanifest"></link>
      </head>
      <body className={inter.className}>
        <NextAuthProvider>
        <Header />
          {children}
        {/* 中にmain要素を格納 */}
        <Footer />
        </NextAuthProvider>
      </body>
    </html>
  );
}
