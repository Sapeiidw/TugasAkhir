import { Reducer } from "react";

interface RegisterForm {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
  phone: string;
}

interface RegisterState {
  isSubmitted: boolean;
  sending: boolean;
  inputs: RegisterForm;
}

type RegisterAction =
  | { name: "SET_IS_SUBMITTED" }
  | { name: "SET_SENDING"; payload: boolean }
  | { name: "SET_INPUTS"; payload: Partial<RegisterForm> };

export const reducer: Reducer<RegisterState, RegisterAction> = (
  state,
  action
) => {
  switch (action.name) {
    case "SET_SENDING":
      return { ...state, sending: action.payload };
      break;
    case "SET_IS_SUBMITTED":
      return { ...state, isSubmitted: true };
    case "SET_INPUTS":
      return {
        ...state,
        inputs: {
          ...state.inputs,
          ...action.payload,
        },
      };
    default:
      return state;
      break;
  }
};
