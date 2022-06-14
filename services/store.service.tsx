import { AxiosResponse } from "axios";
import api from "./api.service";

export const stores = async (): Promise<AxiosResponse<any>> => {
  return await api.get("stores");
};

export const store = async (id: any): Promise<AxiosResponse<any>> => {
  return await api.get(`stores/${id}`);
};

export const products = async (id: any): Promise<AxiosResponse<any>> => {
  return await api.get(`products/store/${id}`);
};
