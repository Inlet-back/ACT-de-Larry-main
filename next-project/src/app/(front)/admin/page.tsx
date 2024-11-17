/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import type { Metadata } from "next";
import "@/_style/basic.css";
import ToHome from "@/_components/toHomeButtonComponent";

import NotFound from "@/app/not-found";

import { getUsersList } from "@/app/api/users/userUtils";


import "@/_style/basic.css";
import "@/_style/accountInfo.css";
import { getIsAdmin } from "@/_utils/adminsFunction";
import NavigationButtons from "@/_components/NavigationButtons";

export const metadata: Metadata = {
	title: "ACT de ラリー",
};

const admins:string[] = [
	"dolonaand@gmail.com",
];

function checkAdmin(adress: string | null) {
	if(!adress) return false;
	return admins.includes(adress);
}

export default async function Admin() {
	if (! await getIsAdmin()) return <NotFound></NotFound>;
	const usersList = await getUsersList();
	const btns = [
		{label: "Administ", href: "/admin/manageAdministrators"},
		{label: "Users", href: "/admin/manageUsers"}
	];
	// let uL = [];
	// if(!!usersList){
	// 	for (const user of usersList) {
	// 		uL.push({name: user.name, image: user.image, email: user.email});
	// 	}
	// }

	// const component = (
	// 	<ul className="users-container">
    //         {uL.map((user, index) => (
    //           <li key={index}>
	// 			<div className="account-info">
	// 				<div className="account-info__grid">
	// 					<img
	// 						src={user.image ?? ""}
	// 						alt="User Icon"
	// 						className="account-info__icon"
	// 					/>
	// 					<div className="account-info__details">
	// 						<h3 className="account-info__username">
	// 							{user.name}
	// 						</h3>
	// 						<p className="account-info__email">{user.email}</p>
	// 					</div>
	// 				</div>
	// 			</div>
	// 		  </li>
    //         ))}
    //     </ul>
	// );

	return (
		<main className="h-screen flex justify-center">
            <div className="main-container">
			<h1>
				Admin Page
				</h1>
			{/* <AccountInfomationComponent></AccountInfomationComponent> */}
				<h1 className="main-txt">User List</h1>
			{/* {component} */}
			<NavigationButtons btnsInfo={btns}></NavigationButtons>
            </div>

			<ToHome></ToHome>
		</main>
	);
}
