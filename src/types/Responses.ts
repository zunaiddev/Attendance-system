interface SignUpRes {
    name: string,
    email: string
}

interface SignInRes {
    token: string
}

export {SignUpRes, SignInRes};