import {Outlet} from "react-router-dom";

function RootLayout() {
    return (
        <center>
            <Outlet/>
        </center>
    );
}

export default Rootlayout;