import {Outlet} from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar.tsx";
import {useEffect, useState} from "react";
import isMobile from "../utils/isMobile.js";
import storage from "../services/storage.js";

function DashboardLayout() {
    const [show, setShow] =
        useState(storage.getItem("isSidebarOpen")
            ? storage.getItem("isSidebarOpen") === "true" : !isMobile());


    useEffect(function () {
        storage.saveItem("isSidebarOpen", show);
    }, [show]);

    return (
        <main className="relative">
            <Sidebar show={show} setShow={setShow}/>
            <div className={`min-h-screen ${(show && window.innerWidth > 639) && "ml-64"}`}>
                <div className="size-full">
                    <Outlet/>
                </div>
            </div>
        </main>
    );
}

export default DashboardLayout;