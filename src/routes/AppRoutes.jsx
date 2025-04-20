import {createBrowserRouter} from "react-router-dom";
import AuthLayout from "../layout/AuthLayout.jsx";
import SignupPage from "../pages/Signup.jsx";
import RootLayout from "../layout/RootLayout.jsx";
import AboutPage from "../pages/AboutPage.jsx";
import ContactPage from "../pages/ContactPage.jsx";
import ForgotPasswordPage from "../pages/ForgotPasswordPage.jsx";
import TermsAndConditions from "../pages/TermsAndConditions.jsx";
import CheckEmail from "../pages/CheckEmail.jsx";
import NotFoundPage from "../pages/NotFoundPage.jsx";
import LoginPage from "../pages/LoginPage.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout/>,
        children: [
            {
                path: "about",
                element: <AboutPage/>
            },
            {
                path: "terms",
                element: <TermsAndConditions/>
            },
            {
                path: "contact",
                element: <ContactPage/>
            },
            {
                path: "forgot-password",
                element: <ForgotPasswordPage/>
            },
            {
                path: "check-email",
                element: <CheckEmail/>
            },
            {
                path: "auth",
                element: <AuthLayout/>,
                children: [
                    {
                        path: "signup",
                        element: <SignupPage/>
                    },
                    {
                        path: "login",
                        element: <LoginPage/>
                    }
                ]
            },
            {
                path: "*",
                element: <NotFoundPage/>
            }
        ]
    }
]);

export default router;