"use client"
import React from 'react';
import Link from 'next/link';
import "@/_style/basic.css";

export default function toHome (){
    return (
        <div className="text-center to-home" onContextMenu={ (e) => {e.preventDefault();}}>
                <Link href="/" passHref className='text-3xl'>
                    <button className="basic-btn">ホームに戻る</button>
                </Link>

        </div>
    );
}