import axios from 'axios';
import {showToast} from "../components/Toaster/Toaster.jsx";

const API = axios.create({
    baseURL: `${import.meta.env.VITE_API_HOST}/api`
});

API.interceptors.response.use(
    response => response,
    error => {
        if (error.response) {
            const status = error.response.status;

            if (status === 500) {
                alert("Something went wrong.")
            }
        } else if (error.request) {
            showToast.error("No Internet Connection.")
        }

        return Promise.reject(error);
    }
);

export default API;