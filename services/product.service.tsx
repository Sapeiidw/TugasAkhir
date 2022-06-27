import { AxiosResponse } from "axios";
import { ProductForm } from "../types";
import api from "./api.service";

export const addProduct = async (
  storeId: any,
  data: ProductForm
): Promise<AxiosResponse<any>> => {
  return await api.post(`/products/${storeId}`, data);
};

export const products = async (storeId: any): Promise<AxiosResponse<any>> => {
  return await api.get(`products/store/${storeId}`);
};

export const product = async (id: any): Promise<AxiosResponse<any>> => {
  return await api.get(`products/${id}`);
};

export const destroyProduct = async (
  id: any,
  storeId: any
): Promise<AxiosResponse<any>> => {
  return await api.delete(`products/${id}/${storeId}`);
};

export const updateProduct = async (
  id: any,
  storeId: any,
  data: ProductForm
): Promise<AxiosResponse<any>> => {
  return await api.put(`products/${id}/${storeId}`, data);
};

export const productAvatar = async (id: number) => {
  return await api.get(`products/avatar/${id}`);
};
