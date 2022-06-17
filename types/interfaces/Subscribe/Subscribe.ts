import { User } from "../User/User";

export interface SubscribePlan {
  id: number;
  name: string;
  duration: number;
  unit: string;
  price: number;
  promoPrice: number;
  active: boolean;
}

export interface SubscribePlanResponse {
  data: SubscribePlan[];
}

export interface SubscribeOrder {
  id: number;
  status: boolean;
  total: number;
  createdAt: Date;
  user: User;
  subscribePlan: SubscribePlan;
}

export interface Subscriber {
  id: number;
  startDate: Date;
  endDate: Date;
  expired: boolean;
  subscribePlan: SubscribePlan;
  user: User;
}

export interface SubscribeHistory {
  id: number;
  createdAt: Date;
  subscribeOrder: SubscribeOrder;
  subscriber: Subscriber;
}

export interface SubscribeHistoryResponse {
  data: SubscribeHistory;
}
