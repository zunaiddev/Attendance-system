import {Outlet} from "react-router-dom";
import Sidebar from "../components/Dashboard/Sidebar.jsx";
import Header from "../components/UI/Header.jsx";
import {useState} from "react";
import {RiMenu2Fill} from "react-icons/ri";

function DashboardLayout() {
    const [show, setShow] = useState(window.innerWidth > 639);

    function showSidebar() {
        setShow(true);
    }

    return (
        <main className="relative">
            <Sidebar show={show} setShow={setShow}/>
            {
                !show && <button type="button" onClick={showSidebar}
                                 className="absolute top-1 left-1 p-2 mt-2 ms-3 text-sm rounded-lg text-gray-400 hover:bg-gray-700 cursor-pointer">
                    <RiMenu2Fill className="size-6"/>
                </button>
            }
            <div className={`p-4 ${(show && window.innerWidth > 639) && "ml-64"}`}>
                <div className="p-4 border-gray-700">
                    <Header/>
                    <Outlet/>
                </div>
            </div>
        </main>
    );
}

export default DashboardLayout;