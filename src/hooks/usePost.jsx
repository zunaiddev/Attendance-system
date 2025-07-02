import {useState} from "react";
import API from "../API/API.js";
import {HttpStatusCode} from "axios";

function usePost() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const post = async (url, postData, token) => {
        setLoading(true);
        setError(null);

        try {
            const response = await API.post(url, postData, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            });

            setLoading(false);
            return response.data.payload;
        } catch (err) {
            if (err.response && err.response.data) {
                setError({status: err.response.status, code: err.response.data.code | "ERROR"});
            } else {
                setError({status: HttpStatusCode.BadRequest, code: "CLIENT_ERROR"});
            }
        }

        setLoading(false);

        return null;
    };

    return {post, loading, error};
}

export default usePost;
