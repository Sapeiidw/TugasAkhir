import { User } from "../index";

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
  phone: number | string;
}

export interface RegisterResponse {
  message: string;
  data: {
    token: string;
    user: User;
  };
}
