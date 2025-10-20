import {NavLink} from "react-router-dom";
import {JSX} from "react";
import MenuIcon from "../icons/MenuIcon.jsx";
import {Bolt, LayoutDashboard, LogOut, LucideIcon, PanelLeftClose, Search, User} from "lucide-react";

type Props = {
    show: boolean,
    setShow: (show: boolean) => void,
}

function Sidebar({show, setShow}: Props): JSX.Element {
    function hideSidebar(): void {
        setShow(false);
    }

    function showSidebar(): void {
        setShow(true);
        console.log("showSidebar");
    }

    return (
        <div>
            <aside
                className={`fixed left-0 top-0 z-40 w-64 bg-orange-500 h-screen transition-transform -translate-x-full  ${show && "translate-x-0"}`}
                aria-label="Sidebar">

                <div className="h-full px-3 py-10 overflow-y-auto bg-gray-800">
                    <ul className="space-y-2 font-medium">
                        <MenuItem to="/dashboard" text="Dashboard" icon={LayoutDashboard}/>
                        <MenuItem to="/dashboard/profile" text="Profile" icon={User}/>
                        <MenuItem to="/dashboard/search" text="Search" icon={Search}/>
                        <MenuItem to="/dashboard/settings" text="Settings" icon={Bolt}/>
                        <MenuItem to="/logout" text="Logout" icon={LogOut}/>
                    </ul>

                    <button type="button" className="absolute right-4 top-3 cursor-pointer" onClick={hideSidebar}>
                        <PanelLeftClose size={21}/>
                    </button>
                </div>
            </aside>
            {
                !show && <button type="button" onClick={showSidebar}
                                 className="z-999 absolute top-1 left-1 p-2 mt-2 ms-3 text-sm rounded-lg text-gray-400 hover:bg-gray-700 cursor-pointer">
                    <MenuIcon/>
                </button>
            }
        </div>
    );
}

type MenuItemProps = {
    to: string;
    text: string;
    icon: LucideIcon;
    replace?: boolean;
}

function MenuItem({to, text, icon: Icon, replace = false}: MenuItemProps) {
    return (
        <li>
            <NavLink to={to} replace={replace}
                     className={({isActive}) => `flex items-center p-2  rounded-lg hover:text-white hover:bg-gray-700 group ${isActive ? "text-white bg-gray-700" : "text-gray-400"}`}
                     end={true}>
                <Icon size={20}/>
                <span className="ms-3">{text}</span>
            </NavLink>
        </li>);
}

export default Sidebar;