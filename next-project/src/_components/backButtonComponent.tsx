"use client";
import { redirect } from "next/navigation";
import "@/_style/basic.css";

const BackButtonComponent = () => {
    const redirectBackPage = () =>{redirect("../")};
    return (
        <div className="text-center left-bottom" onContextMenu={ (e) => {e.preventDefault();}}>
                    <button className="basic-btn" onClick={redirectBackPage}>↩️</button>

        </div>
    );
}

export default BackButtonComponent;