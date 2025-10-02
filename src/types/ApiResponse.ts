import {HttpStatusCode} from "axios";

interface ApiResponse {
    data: any | null;
    error: { status: HttpStatusCode, code: string, message?: string } | null;
}

export default ApiResponse;