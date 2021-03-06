import axios from "axios";
import { redirect } from "next/dist/server/api-utils";
import Image from "next/image";
import Link from "next/link";
import Router from "next/router";
import React, { FormEvent, useReducer, useState } from "react";
import { Button, Input, Modal } from "../../components";
import ErrorMsg from "../../components/Forms/ErrorMsg";
import Guest from "../../components/Layouts/Guest";
import { LoginReducer } from "../../reducer";
import { google, login } from "../../services/auth.service";
import { setToken } from "../../services/storage.service";

import style from "../../styles/Auth.module.css";

type Props = {};

const Signin: React.FC<Props> = (props) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [state, dispatch] = useReducer(LoginReducer, {
    isSubmitted: false,
    sending: false,
    inputs: {
      email: "",
      password: "",
    },
    error: {
      statusCode: 0,
      message: "",
    },
  });

  const { isSubmitted, inputs, sending } = state;
  const { email, password } = inputs;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch({ name: "SET_IS_SUBMITTED" });

    if (!email && !password) return;

    login(inputs)
      .then((resp) => {
        dispatch({ name: "SET_SENDING", payload: true });
        setToken(resp.data.data.token);
        // window.location.replace("/dashboard");
        Router.push("/toko");
      })
      .catch((error) => {
        dispatch({
          name: "SET_ERROR",
          payload: {
            statusCode: error.response.data.statusCode,
            message: error.response.data.message,
          },
        });
      })
      .finally(() => dispatch({ name: "SET_SENDING", payload: false }));
  };

  const handleLoginWithGoogle = () => {
    google().then((resp) => Router.push("/toko"));
  };
  return (
    <Guest>
      <div className="flex-row-center">
        <div className={style.banner}>
          <div className={style.header}>
            <h1 className={style.title}>Welcome Back </h1>
            <p className={style.subtitle}>
              Check your dashboard of your store and manage stock of the product
            </p>
          </div>
          <div className={style.img}>
            <Image
              src="/images/signIlustration1.svg"
              layout="fill"
              alt="signin Ilustration"
            />
          </div>
        </div>
        <div className={style.signForm}>
          <div className={style.wrapper}>
            <div className={style.text}>
              <h1 className={style.title}>SIGN IN</h1>
              <h1 className={style.subtitle}>
                Didn???t have an account yet?{" "}
                <Link href="/auth/signup">
                  <a>Register here.</a>
                </Link>
              </h1>
            </div>
            <form className={style.form} onSubmit={(e) => handleSubmit(e)}>
              <span style={{ color: "red" }}>{state.error.message}</span>

              <Input
                value={state.inputs.email}
                type="email"
                name="email"
                placeholder="Email"
                label="Email"
                required={true}
                onChange={(event) =>
                  dispatch({
                    name: "SET_INPUTS",
                    payload: {
                      email: (event.target as HTMLInputElement).value,
                    },
                  })
                }
              />
              <ErrorMsg
                isSubmitted={isSubmitted}
                value={email}
                isEmpty={!email}
                name="Email"
                min={4}
              />
              <Input
                value={state.inputs.password}
                type="password"
                name="password"
                placeholder="Password"
                label="Password"
                required={true}
                onChange={(event) =>
                  dispatch({
                    name: "SET_INPUTS",
                    payload: {
                      password: (event.target as HTMLInputElement).value,
                    },
                  })
                }
              />
              <ErrorMsg
                isSubmitted={isSubmitted}
                value={password}
                isEmpty={!password}
                name="Password"
                min={4}
                max={12}
              />
              <Link href="/auth/forgot-password">
                <a className={style.forgotPasswordLink}>Forgot Password?</a>
              </Link>

              <Button
                color="btnPrimary"
                size="btnBig"
                text="Login"
                type="submit"
                disabled={sending}
                onClick={(e) => handleSubmit(e)}
              />
              <div className={style.stroke}>
                <span>Or</span>
              </div>
              <Button
                onClick={() => handleLoginWithGoogle()}
                color="btnInverse"
                size="btnMedium"
                text="Sign Up With Google"
                icon="/icons/google.svg"
              />
            </form>
            <Link href={"http://api-dev.inposery.com/api/v1/auth/google"}>
              <a target="_blank">google</a>
            </Link>
          </div>
        </div>
      </div>
    </Guest>
  );
};

export default Signin;
