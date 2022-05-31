import { User } from "../User/User";

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
    user: {
      id: number;
      name: string;
      email: string;
      password: string;
      phone: number;
      verifed: false;
      role: string;
      token: string;
      profilePhoto: string;
    };
  };
}
