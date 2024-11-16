/* eslint-disable */
import React from "react";
import { useState, useEffect, FC } from "react";
import Image from "next/image";
import { access } from "fs/promises";
// import { useRouter } from "next/navigation";
import RoomModalClient from "./roomModalClient";

import "@/_style/roomModal.css"

const actList = [
	// [ 'プロジェクト名', '利用ACT' ],
	[
		["意味のイノベーション（IoM）による価値創造インキュベートプロジェクト"],
		["111"],
	],
	[["環境まちづくりプロジェクト"], ["112"]],
	[["ディスカッションラボ"], ["114"]],
	[
		[
			"Smart UPDATE project",
			"「植・食、健康」産業支援プロジェクト",
			"日本茜魅力発見プロジェクト",
		],
		["116"],
	],
	[["ラヴノプラヴィエ"], ["121"]],
	[["はちのじ", "「これからの学校＆教育を語ろう・そして創ろう」"], ["125"]],
	[["KINDAI Info-Tech HUB"], ["126"]],
	[["共創工房", "生薬の図書館プロジェクト"], ["211"]],
	[["KINDAISUMMIT"], ["311"]],
	[
		["マレーシアの雷防災に挑む! (日本-マレーシア共同雷防災プロジェクト)"],
		["313"],
	],
	[["マーケティング・デザインX Lab."], ["314"]],
	[["KINDAI BIG BLUE"], ["321"]],
	[["Biocoke de camp"], ["324"]],
	[[" まちごと再生Laboプロジェクト/あきばこ家"], ["325"]],
	[["学生広報室"], ["326"]],
	[
		[
			"ユニバーサル・オープン・スペース プロジェクト",
			"循環型社会へのアプローチプロジェクト",
		],
		["411"],
	],
	[["近大Vproject"], ["412"]],
	[["近大読舒会"], ["416"]],
	[["KISS LABO aiming"], ["417"]],
	[["The Mandarinen-Hutte"], ["422"]],
	[["KINDAIマンガカフェ", "大学生のセルフヘルスアッププロジェクト"], ["423"]],
	[
		[
			"社会連携推進プロジェクト",
			"近畿大学食品ロス削減推進プロジェクトC.S.S",
			"L.W.W",
		],
		["427"],
	],
    [["THE GARAGE"], ["999"]]
];


async function checkFileExists(filePath: string): Promise<boolean> {
    // console.log("\u001b[31m" + filePath + "\u001b[0m");
    
  try {
    await access(filePath);
    console.log("The file exists.");
    return true;
  } catch {
    console.log("The file does not exist.");
    return false;
  }
}

interface RoomModalProps {
    roomId: Number;
}

const RoomModal:FC<RoomModalProps> = ({
	roomId,
}: Readonly<{
	roomId: Number;
}>) => {
    
    async function getACTComponent(id: Number) {
        for (let i = 0; i < actList.length; i++) {
            if(actList[i][1][0] == id.toString()) {
                let imagePaths = ["/project-logo/" + actList[i][1][0] + ".png"];
                if(actList[i][0].length > 1){
                    imagePaths = [];
                    for(let j = 0; j < actList[i][0].length; j++) imagePaths.push("/project-logo/" + actList[i][1][0] + "-" + j + ".png")
                }
                for(let j = 0; j < imagePaths.length; j++) {
                    await checkFileExists(process.cwd() + "/public" + imagePaths[j]).then((bool) => {
                        if(!bool) imagePaths[j] = "/project-logo/" + "not-found" + ".png";
                    });
                }
                let roomIdComponent = (
                    <h1>{actList[i][1]}</h1>
                );
                let actNamesComponent = (
                    <div className="modal-text-component">
                        <ul>
                            {actList[i][0].map((actName) => (
                                <li>・{actName}</li>
                            ))}
                        </ul>
                    </div>
                );
                return (
                    <div className="modal-back">
                        <RoomModalClient roomIdComponent={roomIdComponent} imagePaths={imagePaths}  actNamesComponent={actNamesComponent}>
                        </RoomModalClient>
                    </div>
                );
            }
        }
    }

    // function useModalCloseHandler(){
    //     setComponent(<></>);
    //     let router = useRouter();
    //     router.push("");
    // }
    
    // const [component, setComponent] = useState<JSX.Element | undefined>(undefined);
    // setComponent(getACTComponent(roomId));
    // const [component, setComponent] = useState(getACTComponent(roomId));

	// return component;
    return getACTComponent(roomId);
}

export default RoomModal;