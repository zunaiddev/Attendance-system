import {useCallback, useState} from "react";
import API from "../API/API.js";

function usePost(): { post: Function, loading: boolean } {
    const [loading, setLoading] = useState<boolean>(false);

    const post = useCallback(async (url: string, postData: object | undefined, token: undefined | string) => {
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
        } catch (err: any) {
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
