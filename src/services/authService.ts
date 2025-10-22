import {SignInReq, SignUpReq} from "../types/Requests";
import {SignUpRes} from "../types/Responses";
import API from "../API/API";

async function signUp(req: SignUpReq): Promise<SignUpRes> {
    const response: any = API.post("/api/auth/sign-up", req);

    return response.data;
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

export {signUp, signIn, signOut, forgetPassword, refreshToken, verifyToken};