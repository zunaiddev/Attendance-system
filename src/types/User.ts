import Role from "./Role";
import Academic from "./Academic";

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    role: Role;
    createdAt: Date;
    locked: boolean;
    academic: Academic;
}

export default User;