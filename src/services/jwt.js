function extractClaims(token) {
    try {
        const payloadBase64 = token.split('.')[1];
        const payloadJson = atob(payloadBase64);

        return JSON.parse(payloadJson);
    } catch {
        return null;
    }
}

function validate(token, purpose) {
    let claims = extractClaims(token);

    return claims && (claims.exp > Math.floor(Date.now() / 1000)) && claims.purpose === purpose;
}

export {extractClaims, validate};