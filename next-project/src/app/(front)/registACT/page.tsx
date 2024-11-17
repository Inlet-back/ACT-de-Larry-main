import Image from "next/image";
import type { Metadata } from "next";
import "@/_style/basic.css";
import ToHome from "@/_components/toHomeButtonComponent";
import {   POST  as setACT  } from "@/app/api/places/route";
import { getPlace } from "@/app/api/places/placeUtils";

import { GET as getP, POST as setP } from "@/app/api/projects/route";
import { getPJByName,updateProjectsPlace } from "@/app/api/projects/projectUtils";
import { NextRequest } from "next/server";

export const metadata: Metadata = {
	title: "ACT de ラリー - リザルト",
};

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

export default function RegistACT() {
	async function register(location: string) {
		await setACT(
			new NextRequest("http://localhost:3000/api/places", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					location: location,
				}),
			})
		);
	}

    async function registerP(name: string) {
		await setP(
			new NextRequest("http://localhost:3000/api/places", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					name: name,
				}),
			})
		);
	}

	async function registerAll() {
		const places = await fetch("http://localhost:3000/api/places").then((res) => res.json());
		if (!!places) {
			for (const place of places) {
                if(place.location === "412") {
                    return;
                }
			}
		}
		for (let i = 0; i < actList.length; i++) {
			register(actList[i][1][0]);
		}
	}

    async function registerAllP() {
		const places = await fetch("http://localhost:3000/api/projects").then((res) => res.json());
		if (!!places) {
			for (const place of places) {
                if(place.name === "近大Vproject") {
                    return;
                }
			}
		}
		for (let i = 0; i < actList.length; i++) {
			for (let j = 0; j < actList[i][0].length; j++) {
				registerP(actList[i][0][j]);
			}
		}
        registerP("無所属");
	}

	async function connectPJandPlace(){
		for (let i = 0; i < actList.length; i++) {
			const placeId = (await getPlace(actList[i][1][0]))?.id;
			for (let j = 0; j < actList[i][0].length; j++) {
				console.log(actList[i][0][j]);
				const pjId = (await getPJByName(actList[i][0][j]))?.id;
                if(!!placeId && !!pjId) {
					updateProjectsPlace(pjId, placeId);
                }
			}
		}
	}

	// async function showLink(){
	// 	const places = (!!await getPlaces()) ? await getPlaces(): {id:"", location:"", user:{}};
	// 	if(!!!places) return;
	// 	if((places !=  null)){
	// 		return(<ul>

	// 		{places.map((place) => (
	// 			<li key={place}>{place.location} https://academic-theater-day-stamp-rally.com/read?token={place.id}</li>
	// 		))}
	// 		</ul>)
	// 	}
	// }

    // registerAll();
    // registerAllP();
	// connectPJandPlace();

    return (
        <main className="h-screen.main items-center justify-center">
            {/* <form onSubmit={registerAll}>
                <button type="submit">Submit</button>
            </form> */}
			<div>
				{/* {showLink()} */}
			</div>
            <ToHome></ToHome>
        </main>
    );

	return (
		<main className="h-screen .main items-center justify-center">
			{/* <form onSubmit={registerAll}>
				<button type="submit">Submit</button>
			</form> */}
			<ToHome></ToHome>
		</main>
	);
}
