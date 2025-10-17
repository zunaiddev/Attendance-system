import {useEffect, useState} from "react";
import NProgress from "nprogress";
import getToken from "../utils/getToken.js";
import SomethingWentWrong from "../components/others/SomethingWentWrong.jsx";

function DashboardRedirect({children}) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        NProgress.start();
        (async function () {
            setAuthenticated(await getToken() !== null);
            setError(false);
            setLoading(false);
            NProgress.done();
        })();
    }, []);

    if (loading) {
        return null;
    }

    if (error) return <SomethingWentWrong/>;

    // return authenticated ? children : <Navigate to={"/auth/login"} state={{redirected: true}}/>;
    return children;
}

export default DashboardRedirect;