import { User } from "../index";

export interface Store {
  id: number;
  name: string;
  phone: string;
  address: string;
  profilePhoto?: any;
  user: User;
}

export interface StoreForm {
  name: string;
  phone: string;
  address: string;
}

export interface GetStoreResponse {
  data: Store[];
}

export interface PostStoreResponse {
  message: string;
  data: Data;
}

export interface Data {
  createdStore: CreatedStore;
  updatedUser: UpdatedUser;
  createdStoreUser: CreatedStoreUser;
}

export interface CreatedStoreUser {
  role: string;
  user: User;
  store: Store;
  id: number;
}

export interface UpdatedUser {
  id: number;
  name: string;
  email: string;
  password: string;
  phone: string;
  verifed: boolean;
  role: string;
  token?: any;
  profilePhoto?: any;
}

export interface CreatedStore {
  user: User;
  name: string;
  address: string;
  phone: string;
  profilePhoto?: any;
  id: number;
}
