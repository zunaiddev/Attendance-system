import {useState} from "react";
import API from "../API/API.js";

function useApi() {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);
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
            setData(response.data.payload);
        } catch (err) {
            if (!err.response) {
                console.log("no response returned", err);
            } else {
                setError({statusCode: err.response.status});
            }
        }

        setLoading(false);
    };

    return {post, loading, data, error};
}

export default useApi;
