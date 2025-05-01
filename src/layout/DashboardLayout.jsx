import {Outlet} from "react-router-dom";
import Sidebar from "../components/Sidebar.jsx";
import {useEffect, useState} from "react";
import FooterMenu from "../components/FooterMenu.jsx";
import isMobile from "../utils/isMobile.js";

function DashboardLayout() {
    const [show, setShow] = useState(localStorage.getItem("isSidebarOpen") ? localStorage.getItem("isSidebarOpen") === "true" : !isMobile());

    useEffect(function () {
        localStorage.setItem("isSidebarOpen", show.toString());
    }, [show])

    return (
        <main className="relative">
            {
                isMobile() ? <FooterMenu/> : <Sidebar show={show} setShow={setShow}/>
            }
            <div className={`${(show && window.innerWidth > 639) && "ml-64"}`}>
                <div className="p-4 py-13 border-gray-700">
                    <Outlet/>
                </div>
            </div>
        </main>
    );
}

export default DashboardLayout;