import {Outlet, useLocation, useNavigate} from 'react-router-dom';
import LinkField from "../components/UI/LinkField.jsx";
import {FcGoogle} from "react-icons/fc";
import {FaGithub} from "react-icons/fa";
import {useEffect, useState} from "react";

function AuthLayout() {
    let location = useLocation();
    let navigate = useNavigate();
    const [{header, to, text}, setData] = useState({});

    useEffect(() => {
        if (location.pathname === "/auth") {
            navigate("/auth/signup", {replace: true});
        }

        if (location.pathname === "/auth/signup") {
            setData({
                header: "Become A Member",
                to: "/auth/login",
                text: "Already have an account? Login",
            });
        } else if (location.pathname === "/auth/login") {
            setData({
                header: "Welcome Back",
                to: "/auth/signup",
                text: "Don't have an account? Signup",
            });
        }
    }, [location.pathname, navigate]);


    console.log(location);

    return (
        <div className="w-full h-screen flex justify-center items-center ">
            <div
                className="flex flex-col bg-[var(--bg-color)] py-5 px-7  rounded-lg gap-4 shadow-sm shadow-gray-100 w-90">
                <div className="flex justify-center">
                    <h1 className="heading">{header}</h1>
                </div>
                <Outlet/>
                <LinkField to={to} text={text}/>
                <div className="flex justify-center gap-9 justify-self-end mt-40">
                    <center className="cursor-pointer">
                        <FcGoogle className="size-6"/>
                        <span>Google</span>
                    </center>
                    <center className="cursor-pointer">
                        <FaGithub className="size-6 mb-1"/>
                        <span>Github</span>
                    </center>
                </div>
            </div>
        </div>
    );
}

export default AuthLayout;