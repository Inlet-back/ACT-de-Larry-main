// app/[slug]/page.tsx
import { notFound } from 'next/navigation';
import Image from "next/image";
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: "ACT de ラリー - 404"
}
export default async function Page({ params }: { params: { slug: string } }) {
  const pathExists = await checkIfPathExists(params.slug);

  if (!pathExists) {
    notFound();
  }

  return <div>Page for {params.slug}</div>;
}

// サーバー側でパスが存在するかどうかを確認する関数
async function checkIfPathExists(slug: string) {
  // APIやファイルシステムから確認するロジックを追加
  const paths = ['example', 'test', 'about'];
  return paths.includes(slug);
}
