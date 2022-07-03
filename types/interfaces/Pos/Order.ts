import { Store, Inventory } from "../../index";

export interface Payment {
  id: number;
  via: string;
  status: boolean;
  pay?: any;
  totalPrice: number;
  discount?: any;
  change?: any;
}

export interface Order {
  id: number;
  customerName: string;
  status: boolean;
  total: number;
  income: number;
  createdAt: Date;
  store: Store;
  payment: Payment;
}

export interface Item {
  id: number;
  quantity: number;
  total: number;
  totalIncome: number;
  inventory: Inventory;
}

export interface OrderIdItems {
  order: Order;
  items: Item[];
}

export interface OrderIdItemsResponse {
  data: OrderIdItems;
}
