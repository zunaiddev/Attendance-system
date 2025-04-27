import {NavLink} from "react-router-dom";
import {MdSpaceDashboard} from "react-icons/md";
import PropTypes from "prop-types";
import {createElement} from "react";
import {BiArrowToLeft} from "react-icons/bi";
import {CgProfile} from "react-icons/cg";
import isMobile from "../utils/isMobile.js";

function Sidebar({show, setShow}) {
    function hideSidebar() {
        setShow(false);
    }

    function handleOnClick() {
        if (isMobile()) {
            hideSidebar();
        }
    }

    return (
        <div>
            <aside
                className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full  ${show && "translate-x-0"}`}
                aria-label="Sidebar">

                <div className="h-full px-3 py-10 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                    <ul className="space-y-2 font-medium">
                        <MenuItem to="/dashboard" text="Dashboard" icon={MdSpaceDashboard} onClick={handleOnClick}/>
                        <MenuItem to={"/dashboard/profile"} text={"Profile"} icon={CgProfile} onClick={handleOnClick}/>
                    </ul>

                    <button type="button" className="absolute right-4 top-3 cursor-pointer" onClick={hideSidebar}>
                        <BiArrowToLeft className="size-6"/>
                    </button>
                </div>
            </aside>
        </div>
    );
}

function MenuItem({to, text, icon, onClick}) {
    return (
        <li>
            <NavLink to={to} onClick={onClick}
                     className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
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