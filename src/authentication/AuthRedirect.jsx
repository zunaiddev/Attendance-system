import {useEffect, useState} from "react";
import {Navigate, useLocation} from "react-router-dom";
import getToken from "../utils/getToken.js";
import SomethingWentWrong from "../components/others/SomethingWentWrong.jsx";

function AuthRedirect({children}) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [authenticated, setAuthenticated] = useState(false);
    const location = useLocation();
    const redirected = location.state?.redirected;

    useEffect(() => {
        (async function () {
            if (!redirected) {
                setAuthenticated(await getToken() !== null);
            }

            setLoading(false);
            setError(false);
        })();
    }, []);

    if (loading) {
        return null;
    }

    if (error) return <SomethingWentWrong/>

    return authenticated ? <Navigate to={"/dashboard"}/> : children;
}

export default AuthRedirect;