import {SignInReq, SignUpReq} from "../types/Requests";
import {SignUpRes} from "../types/Responses";
import API from "../API/API";

async function signup(req: SignUpReq): Promise<SignUpRes> {
    return (await API.post("/auth/signup", req)).data;
}

async function signIn(req: SignInReq) {
    const response: any = API.post("/api/auth/sign-in", req);

    return response.data;
}

async function signOut() {

}

async function forgetPassword() {

}

async function refreshToken() {

}

async function verifyToken() {

}

async function resendEmail(id: number) {
    return (await API.post(`/resend-email/${id}`)).data;
}

export {signup, signIn, signOut, forgetPassword, refreshToken, verifyToken, resendEmail};