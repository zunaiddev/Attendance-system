import axios from 'axios';
import {toast} from "../components/Toaster/Toaster.tsx";

const API = axios.create({
    baseURL: `${import.meta.env.VITE_API_HOST}/api`,
    withCredentials: true,
});

API.interceptors.response.use(
    res => res,
    err => {
        if (!err.response) {
            toast.error("Server Not Responding.")
        }
        return Promise.reject(err);
    }
);

export default API;