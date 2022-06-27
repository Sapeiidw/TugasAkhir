import { Store, Product } from "../index";
export interface Inventory {
  id: number;
  sku: string;
  stock: number;
  description: string;
  store: Store;
  product: Product;
}

export interface InventoryResponse {
  data: Inventory[];
}

export interface InventoryForm {
  stock: number;
  description: string;
}
