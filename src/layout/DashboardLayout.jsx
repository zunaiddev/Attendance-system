import {Outlet} from "react-router-dom";
import Sidebar from "../components/others/Sidebar.jsx";
import {useEffect, useState} from "react";
import FooterMenu from "../components/others/FooterMenu.jsx";
import isMobile from "../utils/isMobile.js";
import storage from "../services/storage.js";

function DashboardLayout() {
    const [show, setShow] = useState(storage.getItem("isSidebarOpen") ? storage.getItem("isSidebarOpen") === "true" : !isMobile());


    useEffect(function () {
        storage.saveItem("isSidebarOpen", show);
    }, [show]);

    return (
        <main className="relative">
            {
                isMobile() ? <FooterMenu/> : <Sidebar show={show} setShow={setShow}/>
            }
            <div className={`min-h-screen ${(show && window.innerWidth > 639) && "ml-64"}`}>
                <div className="p-4 py-13 border-gray-700 size-full">
                    <Outlet/>
                </div>
            </div>
        </main>
    );
}

export default DashboardLayout;