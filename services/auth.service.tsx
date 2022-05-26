import { AxiosResponse } from "axios"
import { LoginRequest, LoginResponse, Profile, RegisterRequest, RegisterResponse } from "../types"
import api from "./api.service"

export const register = async (data: RegisterRequest): Promise<AxiosResponse<RegisterResponse>> => {
    return await api.post('auth/register', data)
}

export const login = async (data: LoginRequest): Promise<AxiosResponse<LoginResponse>> => {
    return await api.post('auth/login', data)
}

export const profile = async (): Promise<AxiosResponse<Profile>> => {
    return await api.get('auth/user')
} 