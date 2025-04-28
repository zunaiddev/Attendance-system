import {Outlet, useLocation, useNavigate} from "react-router-dom";
import {useEffect} from "react";
import ProgressBar from "../components/ProgressBar.jsx";
import {Toaster} from "../components/Toaster/Toaster.jsx";

function RootLayout() {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === "/") {
            navigate("/dashboard");
        }
    }, [location, navigate]);

    return (
        <div className="w-full h-screen">
            <ProgressBar/>
            <Toaster/>
            <Outlet/>
        </div>
    );
}

export default RootLayout;