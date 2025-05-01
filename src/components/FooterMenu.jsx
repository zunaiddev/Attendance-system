import DashboardIcon from "./icons/DashboardIcon.jsx";
import PropTypes from "prop-types";
import {NavLink} from "react-router-dom";
import ProfileIcon from "./icons/ProfileIcon.jsx";

function FooterMenu() {
    return (
        <div
            className="w-full h-10 bg-gray-800 fixed bottom-0 left-0 flex justify-between items-center px-4     py-2 z-40">
            <MenuItem to="/dashboard" text="Dashboard" icon={DashboardIcon}/>
            <MenuItem to="/dashboard" text="Profile" icon={ProfileIcon}/>
            <MenuItem to="/dashboard" text="Search" icon={DashboardIcon}/>
        </div>
    );
}

function MenuItem({text, to, icon: Icon}) {
    return (
        <NavLink className="group cursor-pointer relative inline-block" to={to}>
            <span
                className="hidden group-hover:inline absolute bottom-full bg-gray-800 text-white text-sm px-2 py-1 rounded shadow">
                 {text}
            </span>
            <Icon/>
        </NavLink>

    )
}

MenuItem.propTypes = {
    to: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    icon: PropTypes.elementType.isRequired,
}

export default FooterMenu;