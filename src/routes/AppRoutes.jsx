import {createBrowserRouter} from "react-router-dom";
import AuthLayout from "../layout/AuthLayout.jsx";
import Signup from "../pages/Auth/Signup.tsx";
import RootLayout from "../layout/RootLayout.jsx";
import About from "../pages/About.jsx";
import Contact from "../pages/Contact.tsx";
import Terms from "../pages/Terms.jsx";
import CheckEmail from "../pages/Auth/CheckEmail.jsx";
import NotFound from "../pages/NotFound.jsx";
import DashboardLayout from "../layout/DashboardLayout.jsx";
import ForgotPassword from "../pages/ForgotPassword.jsx";
import Dashboard from "../pages/Dashboard.jsx";
import Profile from "../pages/Profile.tsx";
import SignIn from "../pages/Auth/SignIn.jsx";
import AuthRedirect from "../authentication/AuthRedirect.jsx";
import DashboardRedirect from "../authentication/DashboardRedirect.jsx";
import Search from "../pages/Search.jsx";
import Verify from "../pages/Auth/Verify.jsx";
import SignOut from "../pages/Auth/SignOut.jsx";
import Settings from "../pages/Settings.jsx";
import Test from "../pages/Test.jsx";
import Institution from "../pages/InstitutionForm.jsx";
import FindStudents from "../pages/FindStudents.js";

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
                path: "dashboard",
                element: <DashboardRedirect><DashboardLayout/></DashboardRedirect>,
                children: [
                    {
                        index: true,
                        element: <Dashboard/>,
                    },
                    {
                        path: "profile",
                        element: <Profile/>
                    },
                    {
                        path: "search",
                        element: <Search/>
                    },
                    {
                        path: "settings",
                        element: <Settings/>
                    }
                ]
            },
            {
                path: "auth",
                element: <AuthRedirect><AuthLayout/></AuthRedirect>,
                children: [
                    {
                        path: "sign-up",
                        element: <Signup/>
                    },
                    {
                        path: "sign-in",
                        element: <SignIn/>
                    }
                ]
            },
            {
                path: "verify",
                element: <Verify/>
            },
            {
                path: "logout",
                element: <SignOut/>
            },
            {
                path: "not-found",
                element: <NotFound/>
            },
            {
                path: "*",
                element: <NotFound/>
            },
            {
                path: "institution",
                element: <Institution/>
            }, {
                path: "find-students",
                element: <FindStudents/>
            },
            {
                path: "test",
                element: <Test/>
            }
        ]
    }
]);

export default router;