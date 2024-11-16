// src/components/ExternalImageComponent.tsx
"use client"
import Image from 'next/image';
import React from 'react';
import "@/_style/header.css"

interface ExternalImageProps {
  src: string;
  alt: string;
  className: string;
}

const ExternalImageComponent: React.FC<ExternalImageProps> = ({ src, alt, className }) => {
  return (
      <Image
        src={src} // 外部画像URL
        alt={alt}
        width={100}
        height={100}
        layout="responsive" // レスポンシブ対応（任意）
        priority={true}
        className={className}
        onContextMenu={ (e) => {e.preventDefault();}}
      />
  );
};

export default ExternalImageComponent;
