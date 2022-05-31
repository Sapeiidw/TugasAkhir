import { Axios, AxiosResponse } from "axios";
import { User } from "../types";
import api from "./api.service";

export const profile = async (): Promise<AxiosResponse<User>> => {
  return await api.get("users/profile");
};

// export const avatar = async (): Promise<AxiosResponse<Avatar>> => {
//   return await api.get("users/avatar");
// };
