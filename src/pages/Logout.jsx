import {useEffect, useState} from "react";
import usePost from "../hooks/usePost.jsx";
import SomethingWentWrong from "../components/SomethingWentWrong.jsx";
import MainLoader from "../loader/MainLoader.jsx";
import {useNavigate} from "react-router-dom";
import {showToast} from "../components/Toaster/Toaster.jsx";

function Logout() {
    const {post} = usePost();
    const [error, setError] = useState(false);
    const nav = useNavigate();

    useEffect(() => {
        (async function () {
            let {error} = await post("/auth/logout");

            if (error) {
                setError(true);
                return;
            }

            localStorage.clear();
            nav("/auth/login");
            showToast.success("Logged out");
        })();
    }, []);

    if (error) return <SomethingWentWrong/>;

    return <MainLoader/>;
}

export default Logout;