"use client"
import React, { FunctionComponent } from 'react';

export default function BtnComponent({
    children,
    className="",
    id="",
    func
  }: Readonly<{
    children: React.ReactNode;
    className: string;
    id: string;
    func: any
  }>) {
    return (
        <button className={className} id={id} onClick={func} onContextMenu={ (e) => {e.preventDefault();}}>
            {children}
        </button>
    );
}