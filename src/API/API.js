import axios from 'axios';
import {showToast} from "../components/Toaster/Toaster.jsx";

const API = axios.create({
    baseURL: `${import.meta.env.VITE_API_HOST}/api`
});

API.interceptors.response.use(
    res => res,
    err => {
        if (!err.response) {
            showToast.error("Server Not Responding.")
        }
        return Promise.reject(err);
    }
);

export default API;