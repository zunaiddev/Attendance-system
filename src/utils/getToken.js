import API from "../API/API.js";
import {validate} from "../services/jwt.js";
import storage from "../services/storage.js";
import {Toast} from "../components/Toaster/Toaster.jsx";

async function getToken() {
    let token = storage.getItem("token");

    if (!token) return null;

    if (validate(token, "AUTHENTICATION")) {
        return token;
    }
    
    try {
        let response = await API.post("/auth/refresh");

        token = response.data?.payload?.token;
        storage.saveItem("token", token);
    } catch (error) {
        if (error.response?.data?.code === "MISSING_COOKIE") {
            sessionStorage.clear();
            Toast.info("Session expired");
        } else {
            Toast.error("Something went wrong!");
        }
    }

    return token;
}

export default getToken;