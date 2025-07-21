import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import getToken from "../utils/getToken.js";

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

    if (error) {
        return <div className="w-full h-screen flex justify-center items-center">
            <h1 className="font-2xl font-bold">Something Went Wrong..</h1>
        </div>
    }


    return children;// return authenticated ? <Navigate to={"/dashboard"}/> : children;
}

export default AuthRedirect;