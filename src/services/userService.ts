import axios from "axios";
import Role from "../types/Role";
import User from "../types/User";
import {UserUpdateReq} from "../types/UserUpdateReq";

async function getUser(): Promise<User> {
    let response = await axios.get("https://jsonplaceholder.typicode.com/users/1");

    response.data = {
        id: 1,
        role: Role.STUDENT,
        name: "John Doe",
        username: "john_doe",
        email: "john@gmail.com",
        locked: false,
        createdAt: new Date(),
        academic: {
            university: "Quantum University",
            course: "BCA",
            section: "C9",
            semester: 5,
            year: 3
        }
    }
    return response.data;
}

async function updateUser(data: UserUpdateReq): Promise<User> {
    let response = await axios.get("https://jsonplaceholder.typicode.com/users/1");

    response.data = {
        id: 1,
        role: data.role,
        name: data.name,
        username: data.username,
        email: "john@gmail.com",
        locked: false,
        createdAt: new Date(),
        academic: {
            university: "Quantum University",
            course: "BCA",
            section: "C9",
            semester: 5,
            year: 3
        }
    }

    return response.data;
}

export {getUser, updateUser};