import { AxiosResponse } from "axios";
import { OrderIdItems } from "../types/interfaces/Pos/Order";
import api from "./api.service";

export const GetAllOrders = async (storeId: any) => {
  return await api.get(`/orders/store/${storeId}`);
};

export const GetOrderIdItems = async (orderId: any) => {
  return await api.get(`/orders/items/${orderId}`);
};
export const CreateOrder = async (storeId: any, data: any) => {
  return await api.post(`/orders/${storeId}`, data);
};
export const DeleteOrder = async (orderId: any) => {
  return await api.delete(`/orders/${orderId}`);
};

export const AddItem2Order = async (orderId: any, data: any) => {
  return await api.post(`/orders/item/${orderId}`, data);
};

export const DelItemInOrder = async (itemId: any) => {
  return await api.delete(`/orders/item/${itemId}`);
};
