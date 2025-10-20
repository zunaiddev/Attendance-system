interface SignUpReq extends SignInReq {
    name: string,
}

interface SignInReq {
    email: string,
    password: string
}

interface ForgetPasswordReq {
    email: string,
}

interface VerifyTokenReq {
    token: string,
}

export {SignUpReq, SignInReq, ForgetPasswordReq};