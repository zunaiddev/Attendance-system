async function IsAuthenticated() {
    let token = localStorage.getItem("token");
    // await new Promise(resolve => setTimeout(resolve, 3000));
    return token !== null;
}

export default IsAuthenticated;