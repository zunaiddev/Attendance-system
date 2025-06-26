import usePost from "../hooks/usePost.jsx";
import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";
import MainLoader from "../loader/MainLoader.jsx";

function Verify() {
    const [params] = useSearchParams();
    const {data, error, post, loading} = usePost();
    const [purpose, setPurpose] = useState(undefined);

    useEffect(() => {
        (async function () {
            let token = params.get("token");
            token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30"
            // await post("/verify", undefined, token);
            // console.log(extractClaims(token).name);
        })();
    }, []);

    if (loading) {
        return <MainLoader/>;
    }

    // return <Navigate to={"/login"}/>;
}

export default Verify;