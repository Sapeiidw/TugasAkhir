import { User } from "../User/User";

export interface RegisterRequest {
    FirstName: string;
    Email: string;
    Password: string;
}

export interface RegisterResponse {
    token: string;
    user: User
    userId: string;
}