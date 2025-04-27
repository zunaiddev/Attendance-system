import {Link, Outlet} from 'react-router-dom';
import logo from "../assets/logo.svg";
import CheckCircle from "../components/CheckCircle.jsx";

function AuthLayout() {

    return (
        <div className="w-full h-screen flex px-6 md:px-10 lg:px-22 py-13">
            <div className="w-full h-full flex justify-center md:justify-between">
                <div className=" hidden md:block">
                    <div className="space-y-7 relative h-full">
                        <div className="flex items-center gap-3">
                            <img src={logo} alt="Brand Logo" className="size-13"/>
                            <h1 className="text-3xl font-semibold">Attendance System</h1>
                        </div>
                        <div className="space-y-5">
                            <SideHeading header="Quick Attendance" text="Mark attendance fast — no paper, no hassle."/>
                            <SideHeading header="All-in-One Tool" text="Made for students, CRs, and teachers."/>
                            <SideHeading header="Works Offline" text="Fast, lightweight, and works with low internet."/>
                        </div>
                        <div className="space-x-5 absolute bottom-0">
                            <Link to="/about" className="text-sm text-gray-400 hover:text-gray-100 hover:underline">
                                About
                            </Link>
                            <Link to="/terms" className="text-sm text-gray-400 hover:text-gray-100 hover:underline">
                                Terms & Conditions
                            </Link>
                            <Link to="/contact" className="text-sm text-gray-400 hover:text-gray-100 hover:underline">
                                Contact
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="h-fit bg-gray-800 rounded-lg p-6 w-119">
                    <Outlet/>
                </div>
            </div>
        </div>
    );
}

function SideHeading({header, text}) {
    return <div className="flex gap-3">
        <div className="pt-2">
            <CheckCircle/>
        </div>
        <div className="space-y-1">
            <h1 className="text-2xl font-bold">{header}</h1>
            <span className="text-gray-400 text-sm">{text}</span>
        </div>
    </div>
}

export default AuthLayout;