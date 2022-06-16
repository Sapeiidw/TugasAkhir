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
