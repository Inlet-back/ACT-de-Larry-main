/* eslint-disable */
"use client";
import React from "react";
import { useState, useEffect, FC } from "react";
import Image from "next/image";
import { access } from "fs/promises";
import { useRouter } from "next/navigation";

import "@/_style/roomModal.css";

interface RoomModalClientProps {
	roomIdComponent: React.ReactNode;
	// imageComponent: React.ReactNode;
	actNamesComponent: React.ReactNode;
    imagePaths: string[];
}

const RoomModalClient: FC<RoomModalClientProps> = ({
	roomIdComponent,
	// imageComponent,
	actNamesComponent,
    imagePaths,
}: Readonly<{
	roomIdComponent: React.ReactNode;
	// imageComponent: React.ReactNode;
	actNamesComponent: React.ReactNode;
    imagePaths: string[];
}>) => {
    const router = useRouter();
	function useModalCloseHandler() {
		// setComponent(<></>);
		router.push("/home");
	}

    let imageComponent = (
        <div className = "image-modal-component">
            {/* <Image src="https://pbs.twimg./com/media/GZWgWL4asAIhfgD?format=png&name=small" alt="act-project-logo" width="2000" height="2000" className="act-project-logo" onContextMenu={ (e) => {e.preventDefault();}}> */}
			{
				imagePaths.map((path) => (
					<Image src={path} alt="act-project-logo" width="2000" height="2000" className="act-project-logo" onContextMenu={ (e) => {e.preventDefault();}}>
            </Image>
			))
			}
        </div>
    );

	return (
		<div className="room-modal-component" tabIndex={0} onBlur={useModalCloseHandler}>
			{roomIdComponent}
			{imageComponent}
			{actNamesComponent}
			<button
				onClick={useModalCloseHandler}
				className="basic-btn text-4xl modal-btn"
			>
				閉じる
			</button>
		</div>
	);
};

export default RoomModalClient;
