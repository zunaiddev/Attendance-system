import {useCallback, useState} from "react";
import API from "../API/API.js";

function useGet() {
    const [loading, setLoading] = useState(false);

    const get = useCallback(async (url, token) => {
        setLoading(true);
        let data = null, error = null;

        try {
            const response = await API.get(url, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            });

            setLoading(false);
            data = response.data.payload;
        } catch (err) {
            error = {
                status: err.status,
                code: (err.response && err.response.data) ? err.response.data.code : "CLIENT_ERROR"
            };
        }

        setLoading(false);

        return {data, error};
    }, []);

    return {get, loading};
}

export default useGet;
