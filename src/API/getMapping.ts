import ApiResponse from "../types/ApiResponse";
import API from "./API";
import getToken from "../utils/getToken";

async function getMapping(uri: string, token?: string): Promise<ApiResponse> {
    let res: ApiResponse = {data: null, error: null};

    try {
        const response = await API.get(uri, {
            headers: {
                'Authorization': `Bearer ${token ? token : await getToken()}`,
            }
        });

        res.data = response.data.payload;
    } catch (err: any) {
        res.error = {
            status: err.statusCode,
            code: err?.response?.data?.code ?? "CLIENT_ERROR",
            message: err?.response?.data?.message ?? "Unknown error"
        }
    }

    return res;
}

export default getMapping;