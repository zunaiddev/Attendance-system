import API from "../API/API.js";
import {validate} from "../services/jwt.js";

async function getToken() {
    let token = localStorage.getItem("token");

    if (!token) return null;

    if (validate(token, "AUTHENTICATION")) {
        return token;
    }
    
    try {
        let response = await API.post("/auth/refresh");

        token = response.data.payload.token;
    } catch (err) {
        console.log("Error: ", err);
    }

    return token;
}

export default getToken;