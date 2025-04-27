import {createBrowserRouter} from "react-router-dom";
import AuthLayout from "../layout/AuthLayout.jsx";
import Signup from "../pages/Signup.jsx";
import RootLayout from "../layout/RootLayout.jsx";
import About from "../pages/About.jsx";
import Contact from "../pages/Contact.jsx";
import Terms from "../pages/Terms.jsx";
import CheckEmail from "../pages/CheckEmail.jsx";
import NotFound from "../pages/NotFound.jsx";
import DashboardLayout from "../layout/DashboardLayout.jsx";
import ForgotPassword from "../pages/ForgotPassword.jsx";
import CompleteProfile from "../pages/CompleteProfile.jsx";
import Dashboard from "../pages/Dashboard.jsx";
import Profile from "../pages/Profile.jsx";
import Login from "../pages/Login.jsx";
import AuthRedirect from "../authentication/AuthRedirect.jsx";
import DashboardRedirect from "../authentication/DashboardRedirect.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout/>,
        children: [
            {
                path: "about",
                element: <About/>
            },
            {
                path: "terms",
                element: <Terms/>
            },
            {
                path: "contact",
                element: <Contact/>
            },
            {
                path: "forgot-password",
                element: <AuthRedirect><ForgotPassword/></AuthRedirect>
            },
            {
                path: "check-email",
                element: <AuthRedirect><CheckEmail/></AuthRedirect>
            },
            {
                path: "complete-profile",
                element: <DashboardRedirect><CompleteProfile/></DashboardRedirect>
            },
            {
                path: "dashboard",
                element: <DashboardRedirect><DashboardLayout/></DashboardRedirect>,
                children: [
                    {
                        index: true,
                        element: <Dashboard/>
                    },
                    {
                        path: "profile",
                        element: <Profile/>
                    }
                ]
            },
            {
                path: "auth",
                element: <AuthRedirect><AuthLayout/></AuthRedirect>,
                children: [
                    {
                        path: "signup",
                        element: <Signup/>
                    },
                    {
                        path: "login",
                        element: <Login/>
                    }
                ]
            },
            {
                path: "*",
                element: <NotFound/>
            }
        ]
    }
]);

export default router;