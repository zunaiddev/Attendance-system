import {useEffect, useState} from "react";
import isAuthenticated from "../utils/isAuthenticated.js";
import {Navigate, useLocation} from "react-router-dom";
import NProgress from "nprogress";

function AuthRedirect({children}) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [authenticated, setAuthenticated] = useState(false);
    const location = useLocation();
    const redirected = location.state?.redirected;

    useEffect(() => {
        (async function () {
            NProgress.start();
            if (!redirected) {
                setAuthenticated(await isAuthenticated());
            }
            NProgress.done();
            setLoading(false);
            setError(false);
        })();
    }, []);

    if (loading) {
        return null;
    }
    if (error) {
        return <div className="w-full h-screen flex justify-center items-center">
            <h1 className="font-2xl font-bold">Something Went Wrong..</h1>
        </div>
    }

    return authenticated ? <Navigate to={"/dashboard"}/> : children;
}

export default AuthRedirect;