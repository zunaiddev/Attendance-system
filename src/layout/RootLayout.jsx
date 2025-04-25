import {Outlet, useLocation, useNavigate} from "react-router-dom";
import {useEffect} from "react";

function RootLayout() {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === "/") {
            navigate("/dashboard");
        }
    }, [])


    return (
        <div className="w-full h-screen">
            <Outlet/>
        </div>
    );
}

export default RootLayout;