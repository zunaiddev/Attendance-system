import {Outlet, useLocation, useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {Toaster} from 'react-hot-toast';
import ProgressBar from "../components/ProgressBar.jsx";

function RootLayout() {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === "/") {
            navigate("/dashboard");
        }
    }, []);

    return (
        <div className="w-full h-screen">
            <ProgressBar/>
            <Toaster/>
            <Outlet/>
        </div>
    );
}

export default RootLayout;