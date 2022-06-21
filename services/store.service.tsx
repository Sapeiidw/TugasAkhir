import { AxiosResponse } from "axios";
import { StoreForm, GetStoreResponse, PostStoreResponse } from "../types";
import api from "./api.service";

export const storesCreate = async (
  data: StoreForm
): Promise<AxiosResponse<PostStoreResponse>> => {
  return await api.post("stores", data);
};

export const stores = async (): Promise<AxiosResponse<GetStoreResponse>> => {
  return await api.get("stores");
};

export const store = async (id: any): Promise<AxiosResponse<any>> => {
  return await api.get(`stores/${id}`);
};

export const storeDestroy = async (id: any): Promise<AxiosResponse<any>> => {
  return await api.delete(`stores/${id}`);
};
