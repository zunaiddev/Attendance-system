import Role from "./Role";

export interface UserUpdateReq {
    name: string;
    username: string;
    role: Role,
}