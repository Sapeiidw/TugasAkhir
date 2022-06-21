import { Reducer } from "react";
import { ProductForm } from "../types";

interface ErrorMessage {
  statusCode?: number;
  message?: string;
}

interface ProductState {
  isSubmitted: boolean;
  sending: boolean;
  inputs: ProductForm;
  error: ErrorMessage;
}

type ProductAction =
  | { name: "SET_IS_SUBMITTED" }
  | { name: "SET_SENDING"; payload: boolean }
  | { name: "SET_INPUTS"; payload: Partial<ProductForm> }
  | { name: "SET_ERROR"; payload: Partial<ErrorMessage> };

export const reducer: Reducer<ProductState, ProductAction> = (
  state,
  action
) => {
  switch (action.name) {
    case "SET_SENDING":
      return { ...state, sending: action.payload };
      break;

    case "SET_IS_SUBMITTED":
      return { ...state, isSubmitted: true };
      break;

    case "SET_INPUTS":
      return {
        ...state,
        inputs: {
          ...state.inputs,
          ...action.payload,
        },
      };
      break;
    case "SET_ERROR":
      return {
        ...state,
        error: {
          ...state.inputs,
          ...action.payload,
        },
      };
      break;
    default:
      return state;
      break;
  }
};
