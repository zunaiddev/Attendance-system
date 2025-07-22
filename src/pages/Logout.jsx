import {useEffect} from "react";
import usePost from "../hooks/usePost.jsx";
import SomethingWentWrong from "../components/SomethingWentWrong.jsx";

function Logout() {
    const {post} = usePost();

    useEffect(() => {
        (async function () {
            let {data, error} = await post();
            if (error) {

            }
        })();
    }, []);

    return <SomethingWentWrong/>;
}

export default Logout;