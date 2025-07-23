import API from "../API/API.js";
import {validate} from "../services/jwt.js";
import {showToast} from "../components/Toaster/Toaster.jsx";

async function getToken() {
    let rememberMe = localStorage.getItem("remember") === "true";
    let token = rememberMe ? localStorage.getItem("token") : sessionStorage.getItem("token");

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