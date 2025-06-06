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
            const response = await API.post(url, {date: postData}, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            });
            console.log(response);
            setData(response.data.payload);
        } catch (err) {
            setError({statusCode: err.response.status});
        }

        setLoading(false);
    };

    return {post, loading, data, error};
}

export default useApi;
