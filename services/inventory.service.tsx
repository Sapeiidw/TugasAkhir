import { AxiosResponse } from "axios";
import {
  InventoryRequest,
  InventoryResponse,
} from "../types/interfaces/Inventory/Inventory";
import api from "./api.service";

export const GetAllInventory = async (
  storeId: any
): Promise<AxiosResponse<InventoryResponse>> => {
  return await api.get(`/inventories/store/${storeId}`);
};

export const AddInventory = async (
  productId: number,
  storeId: any,
  data: InventoryRequest
): Promise<AxiosResponse<InventoryResponse>> => {
  return api.post(`/inventories/${productId}/${storeId}`, data);
};
