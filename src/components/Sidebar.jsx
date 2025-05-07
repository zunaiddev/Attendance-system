import {NavLink} from "react-router-dom";
import PropTypes from "prop-types";
import {createElement} from "react";
import DashboardIcon from "./icons/DashboardIcon.jsx";
import ProfileIcon from "./icons/ProfileIcon.jsx";
import MenuIcon from "./icons/MenuIcon.jsx";
import SearchIcon from "./icons/SearchIcon.jsx";
import CloseSidebarIcon from "./icons/CloseSidebarIcon.jsx";

function Sidebar({show, setShow}) {
    function hideSidebar() {
        setShow(false);
    }

    function showSidebar() {
        setShow(true);
    }

    return (
        <div>
            <aside
                className={`fixed left-0 top-0 z-40 w-64 h-screen transition-transform -translate-x-full  ${show && "translate-x-0"}`}
                aria-label="Sidebar">

                <div className="h-full px-3 py-10 overflow-y-auto bg-gray-800">
                    <ul className="space-y-2 font-medium">
                        <MenuItem to="/dashboard" text="Dashboard" icon={DashboardIcon}/>
                        <MenuItem to="/dashboard/profile" text="Profile" icon={ProfileIcon}/>
                        <MenuItem to="/dashboard/search" text="Search" icon={SearchIcon}/>
                    </ul>

                    <button type="button" className="absolute right-4 top-3 cursor-pointer" onClick={hideSidebar}>
                        <CloseSidebarIcon/>
                    </button>
                </div>
            </aside>
            {
                !show && <button type="button" onClick={showSidebar}
                                 className="absolute top-1 left-1 p-2 mt-2 ms-3 text-sm rounded-lg text-gray-400 hover:bg-gray-700 cursor-pointer">
                    <MenuIcon/>
                </button>
            }
        </div>
    );
}

function MenuItem({to, text, icon}) {
    return (
        <li>
            <NavLink to={to}
                     className={({isActive}) => `flex items-center p-2  rounded-lg hover:text-white hover:bg-gray-700 group ${isActive ? "text-white bg-gray-700" : "text-gray-400"}`}
                     end={true}>
                {icon && createElement(icon, {className: "size-6"})}
                <span className="ms-3">{text}</span>
            </NavLink>
        </li>);
}

MenuItem.propTypes = {
    to: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    icon: PropTypes.elementType.isRequired
};

export default Sidebar;