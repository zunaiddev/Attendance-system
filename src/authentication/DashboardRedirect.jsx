import {useEffect, useState} from "react";
import isAuthenticated from "../utils/isAuthenticated.js";
import {Navigate} from "react-router-dom";
import NProgress from "nprogress";

function DashboardRedirect({children}) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        NProgress.start();
        (async function () {
            setAuthenticated(await isAuthenticated());
            setError(false);
            setLoading(false);
            NProgress.done();
        })();
    }, []);

    if (loading) {
        return null;
    }

    if (error) {
        return <div className="w-full h-screen flex justify-center items-center">
            <h1>Something Went Wrong..</h1>
        </div>
    }

    return authenticated ? children : <Navigate to={"/auth/login"} state={{redirected: true}}/>;
}

export default DashboardRedirect;