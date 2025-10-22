import {useEffect, useState} from "react";
import usePost from "../../hooks/usePost.tsx";
import SomethingWentWrong from "../../components/others/SomethingWentWrong.jsx";
import MainLoader from "../../loader/MainLoader.jsx";
import {useNavigate} from "react-router-dom";
import {toast} from "../../components/Toaster/Toaster.tsx";
import storage from "../../services/storage.js";

function SignOut() {
    const [post] = usePost();
    const [error, setError] = useState(false);
    const nav = useNavigate();

    useEffect(() => {
        (async function () {
            let {error} = await post("/auth/logout");

            if (error) {
                setError(true);
                return;
            }

            storage.clear();

            nav("/auth/login");
            toast.success("Logged out");
        })();
    }, [nav, post]);

    if (error) return <SomethingWentWrong/>;

    return <MainLoader/>;
}

export default SignOut;