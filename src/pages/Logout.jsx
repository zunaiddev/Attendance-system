import {useEffect, useState} from "react";
import usePost from "../hooks/usePost.jsx";
import SomethingWentWrong from "../components/others/SomethingWentWrong.jsx";
import MainLoader from "../loader/MainLoader.jsx";
import {useNavigate} from "react-router-dom";
import {Toast} from "../components/Toaster/Toaster.jsx";
import storage from "../services/storage.js";

function Logout() {
    const {post} = usePost();
    const [error, setError] = useState(false);
    const nav = useNavigate();

    useEffect(() => {
        (async function () {
            let remember = localStorage.getItem("remember") === "true";

            if (!remember) {
                storage.clear();
                nav("/auth/login");
                Toast.success("Logged out");
                return;
            }

            let {error} = await post("/auth/logout");

            if (error) {
                setError(true);
                return;
            }

            localStorage.clear();
            nav("/auth/login");
            Toast.success("Logged out");
        })();
    }, []);

    if (error) return <SomethingWentWrong/>;

    return <MainLoader/>;
}

export default Logout;