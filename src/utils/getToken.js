import API from "../API/API.js";
import {validate} from "../services/jwt.js";
import {showToast} from "../components/Toaster/Toaster.jsx";
import storage from "../services/storage.js";

async function getToken() {
    let token = storage.getItem("token");

    if (!token) return null;

    if (validate(token, "AUTHENTICATION")) {
        return token;
    }
    
    try {
        let response = await API.post("/auth/refresh");

        token = response.data.payload.token;
    } catch {
        showToast.info("Session out.");
    }

    return token;
}

export default getToken;