import API from "../API/API.js";
import {extractClaims} from "../services/jwt.js";

async function getToken() {
    let token = localStorage.getItem("token");

    if (!token) return null;

    let claims = extractClaims(token);

    if (claims?.purpose === "AUTHENTICATION") {
    }

    try {
        let response = await API.post("/auth/refresh");
        console.log(response);
    } catch (err) {
        console.log("Error: ", err);
    }

    return token;
}

export default getToken;