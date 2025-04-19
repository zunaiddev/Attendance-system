import {createBrowserRouter} from "react-router-dom";
import AuthLayout from "../layout/AuthLayout.jsx";
import Signup from "../pages/Signup.jsx";
import Login from "../pages/Login.jsx";

const router = createBrowserRouter([
    {
        path: "/auth",
        element: <AuthLayout/>,
        children: [
            {
                path: "/auth/signup",
                element: <Signup/>
            },
            {
                path: "/auth/login",
                element: <Login/>
            }
        ]
    }
]);

export default router;