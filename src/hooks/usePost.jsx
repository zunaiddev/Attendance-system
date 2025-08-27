import {useCallback, useState} from "react";
import API from "../API/API.js";

function usePost() {
    const [loading, setLoading] = useState(false);

    const post = useCallback(async (url, postData = undefined, token = undefined) => {
        setLoading(true);
        let data = null, error = null;

        try {
            const response = await API.post(url, postData, {
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

    return {post, loading};
}

export default usePost;
