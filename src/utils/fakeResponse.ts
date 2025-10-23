import API from "../API/API";

async function fakeResponse(code: number) {
    let response = await
        API.get(`http://localhost:9090/api/${code}`);

    return response.data;
}

export default fakeResponse;