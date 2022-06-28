import { AxiosResponse } from "axios";
import {
  ForgotPasswordRequest,
  ForgotPasswordResponse,
  LoginRequest,
  LoginResponse,
  Profile,
  RegisterRequest,
  RegisterResponse,
} from "../types";
import api from "./api.service";

export const register = async (
  data: RegisterRequest
): Promise<AxiosResponse<RegisterResponse>> => {
  return await api.post("auth/register", data);
};

export const login = async (
  data: LoginRequest
): Promise<AxiosResponse<LoginResponse>> => {
  return await api.post("auth/login", data);
};

export const google = async (): Promise<AxiosResponse<any>> => {
  return await api.get("auth/google", {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });
};

export const profile = async (): Promise<AxiosResponse<Profile>> => {
  return await api.get("auth/user");
};

export const forgotPassword = async (
  data: ForgotPasswordRequest
): Promise<AxiosResponse<ForgotPasswordResponse>> => {
  return await api.post("auth/forgot-password", data);
};
