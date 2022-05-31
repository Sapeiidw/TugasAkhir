import Image from "next/image";
import Link from "next/link";
import Router from "next/router";
import React, { FormEvent, useReducer } from "react";
import { Button, Guest, Input } from "../../components";
import ErrorMsg from "../../components/Forms/ErrorMsg";
import { ForgotPasswordReducer } from "../../reducer";
import { authService } from "../../services";
import style from "../../styles/Auth.module.css";

type Props = {};

export const ForgotPassword: React.FC<Props> = (props) => {
  // const [state, dispatch] = useReducer(ForgotPasswordReducer, {
  //   isSubmitted: false,
  //   sending: false,
  //   inputs: {
  //     email: "",
  //   },
  // });

  // const { isSubmitted, inputs, sending } = state;
  // const { email } = inputs;
  // const forgotPassword = () => {
  //   dispatch({ name: "SET_IS_SUBMITTED" });

  //   if (!email) return;

  //   authService
  //     .forgotPassword(inputs)
  //     .then((resp) => {
  //       dispatch({ name: "SET_SENDING", payload: true });
  //       console.log(resp);
  //       Router.push("/auth/resend-email");
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     })
  //     .finally(() => dispatch({ name: "SET_SENDING", payload: false }));
  // };
  // const handleSubmit = (e: FormEvent) => {
  //   e.preventDefault();
  //   forgotPassword();
  // };
  return (
    <Guest>
      {/* <div className={style.forgotPassword}>
        <div className={style.forgotPasswordWrapper}>
          <div className={style.img}>
            <Image src="/images/Currency Crush Security.svg" layout="fill" />
          </div>
          <div className={style.forgotPasswordText}>
            <h1 className={style.forgotPasswordTitle}>Forgot your password?</h1>
            <p className={style.forgotPasswordSubtitle}>
              No worries, we’ll send you reset instruction
            </p>
          </div>
          <form
            onSubmit={(e) => handleSubmit(e)}
            className={style.forgotPasswordForm}
          >
            <Input
              onChange={(event) =>
                dispatch({
                  name: "SET_INPUTS",
                  payload: {
                    email: (event.target as HTMLInputElement).value,
                  },
                })
              }
              type="email"
              name="email"
              placeholder="Your Email"
              value={state.inputs.email}
              required={false}
            />
            <ErrorMsg
              name="Email"
              value={email}
              isEmpty={!email}
              isSubmitted={isSubmitted}
            />
            <Button color="btnPrimary" size="btnBig" text="Send me an email" />
          </form>
          <Link href="/auth/signin">
            <a>Back to Login</a>
          </Link>
        </div>
      </div> */}
    </Guest>
  );
};

// export default ForgotPassword;
// function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
//   throw new Error("Function not implemented.");
// }
