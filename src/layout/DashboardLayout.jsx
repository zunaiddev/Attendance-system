import {Outlet} from "react-router-dom";
import Sidebar from "../components/Sidebar.jsx";
import {useEffect, useState} from "react";
<<<<<<< HEAD
import FooterMenu from "../components/FooterMenu.jsx";
=======
import {RiMenu2Fill} from "react-icons/ri";
>>>>>>> 06c9ab44c09bf9b375aeb578d3c3d3806dd853f1
import isMobile from "../utils/isMobile.js";

function DashboardLayout() {
    const [show, setShow] = useState(localStorage.getItem("isSidebarOpen") ? localStorage.getItem("isSidebarOpen") === "true" : !isMobile());
<<<<<<< HEAD
=======

    useEffect(function () {
        localStorage.setItem("isSidebarOpen", show.toString());
    }, [show])
>>>>>>> 06c9ab44c09bf9b375aeb578d3c3d3806dd853f1

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