import { Reducer } from "react";

interface LoginForm {
  email: string;
  password: string;
}
interface ErrorMessage {
  statusCode?: number;
  message?: string;
}

interface LoginState {
  isSubmitted: boolean;
  sending: boolean;
  inputs: LoginForm;
  error: ErrorMessage;
}

type LoginAction =
  | { name: "SET_IS_SUBMITTED" }
  | { name: "SET_SENDING"; payload: boolean }
  | { name: "SET_INPUTS"; payload: Partial<LoginForm> }
  | { name: "SET_ERROR"; payload: Partial<ErrorMessage> };

export const reducer: Reducer<LoginState, LoginAction> = (state, action) => {
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
