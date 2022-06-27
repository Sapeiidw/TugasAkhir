import { AxiosResponse } from "axios";
import {
  InventoryForm,
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
  storeId: number,
  data: InventoryForm
): Promise<AxiosResponse<InventoryResponse>> => {
  return api.post(`/inventories/${productId}/${storeId}`, { data });
};
