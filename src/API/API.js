import axios from 'axios';
import {toast} from "../components/Toaster/Toaster.js";

const API = axios.create({
    baseURL: `${import.meta.env.VITE_API_HOST}/api`,
});

API.interceptors.request.use(config => {
    if (!navigator.onLine) {
        return Promise.reject(new Error("No Internet Connection", {
            name: "CODE",
        }));
    }

    return config;
});

API.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.code === "ECONNABORTED") {
            toast.error("Request timed out");
        } else if (!error.response) {
            toast.error("Server not responding");
        } else if (error.response.status >= 500) {
            toast.error("Internal Server Error");
        }

        return Promise.reject(error);
    });

export default API;