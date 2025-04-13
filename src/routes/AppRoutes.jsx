import {createBrowserRouter} from "react-router-dom";
import AuthLayout from "../layout/AuthLayout.jsx";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <AuthLayout/>
    }
]);

export default routes;