import {Outlet} from "react-router-dom";

function RootLayout() {
    return (
        <div className="w-full h-screen">
            <Outlet/>
        </div>
    );
}

export default RootLayout;