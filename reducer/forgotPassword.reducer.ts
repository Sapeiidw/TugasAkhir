import { Reducer } from "react";

interface ForgotPasswordForm {
  email: string;
}

interface ForgotPasswordState {
  isSubmitted: boolean;
  sending: boolean;
  inputs: ForgotPasswordForm;
}

type ForgotPasswordAction =
  | { name: "SET_IS_SUBMITTED" }
  | { name: "SET_SENDING"; payload: boolean }
  | { name: "SET_INPUTS"; payload: Partial<ForgotPasswordForm> };

export const reducer: Reducer<ForgotPasswordState, ForgotPasswordAction> = (
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
