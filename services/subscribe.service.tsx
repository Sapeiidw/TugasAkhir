import { AxiosResponse } from "axios";
import { SubscribeHistoryResponse, SubscribePlanResponse } from "../types";
import api from "./api.service";

export const GetSubscribePlans = async (): Promise<
  AxiosResponse<SubscribePlanResponse>
> => {
  return await api.get("/subscribe-orders/subscribe-plans");
};

export const GetSubscribeHistory = async (): Promise<
  AxiosResponse<SubscribeHistoryResponse>
> => {
  return await api.get("/subscribe-orders/subscribe-history");
};

export const GetSubscribeHistoryId = async (
  id: number
): Promise<AxiosResponse<SubscribeHistoryResponse>> => {
  return await api.get(`/subscribe-orders/subscribe-history/${id}`);
};

export const PostSubscribePlanId = async (
  planId: number
): Promise<AxiosResponse<any>> => {
  return await api.post(`/subscribe-orders/${planId}`);
};
