import { Store, Category } from "../index";

export interface Product {
  id: number;
  name: string;
  description: string;
  profilePhoto?: any;
  unit: number;
  groceryPrice: number;
  price: number;
  store: Store;
  category: Category;
}

export interface ProductResponse {
  data: Product[];
}

export interface ProductForm {
  categoryName: any;
  name: string;
  description: string;
  unit: number;
  groceryPrice: number;
  price: number;
}
