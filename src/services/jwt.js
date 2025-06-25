import {jwtDecode} from "jwt-decode";

function extractClaims(token) {
    try {
        return jwtDecode(token);
    } catch {
        return null;
    }
}

function validate(token) {
    let claims = extractClaims(token);

    if (claims) {
        return Date.now() > claims.exp * 1000;
    }
}

export {extractClaims, extractPurpose, validate};