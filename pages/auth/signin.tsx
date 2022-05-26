import Image from "next/image";
import Link from "next/link";
import React, { FormEvent, useReducer } from "react";
import { Button, Input } from "../../components";
import Guest from "../../components/Layouts/Guest";
import { authService, storageService } from "../../services";
import { reducer } from "../../services/auth/Login";
import style from "../../styles/Auth.module.css";

type Props = {};

const Signin: React.FC<Props> = (props) => {
  const [state, dispatch] = useReducer(reducer, {
    isSubmitted: false,
    sending: false,
    inputs: {
      email: "",
      password: "",
    },
  });

  const { isSubmitted, inputs } = state;
  const { email, password } = inputs;

  const login = () => {
    dispatch({ name: "SET_IS_SUBMITTED" });

    if (!email && !password) return;
    dispatch({ name: "SET_SENDING", payload: false });

    console.log("state", state);

    authService
      .login(inputs)
      .then((res) => {
        console.log("res", res);
        storageService.setToken(res.data.token);
        // navigation("/u")
      })
      .catch((error) => console.log("error", error))
      .finally(() => dispatch({ name: "SET_SENDING", payload: false }));
  };

  const handleSubmit = (e: FormEvent) => {
      e.preventDefault()
      login()
  }

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
            <Image src="/images/signIlustration1.svg" layout="fill" />
          </div>
        </div>
        <div className={style.signForm}>
          <div className={style.wrapper}>
            <div className={style.text}>
              <h1 className={style.title}>SIGN IN</h1>
              <h1 className={style.subtitle}>
                Didn’t have an account yet?{" "}
                <Link href="/auth/signup">
                  <a>Register here.</a>
                </Link>
              </h1>
            </div>
            <form className={style.form} onSubmit={(e)=> handleSubmit(e)}>
              <Input
                value={state.inputs.email}
                type="email"
                name="email"
                placeholder="Email"
                label="Email"
                onChange={(event) =>
                  dispatch({
                    name: "SET_INPUTS",
                    payload: {
                      email: (event.target as HTMLInputElement).value,
                    },
                  })
                }
              />
              <div>
                {isSubmitted && !email ? (
                  <span style={{ color: "red" }}>Email wajib diisi</span>
                ) : null}
              </div>
              <Input
                value={state.inputs.password}
                type="password"
                name="password"
                placeholder="Password"
                label="Password"
                onChange={(event) =>
                  dispatch({
                    name: "SET_INPUTS",
                    payload: {
                      password: (event.target as HTMLInputElement).value,
                    },
                  })
                }
              />
              <div>
                {isSubmitted && !password ? (
                  <span style={{ color: "red" }}>Password wajib diisi</span>
                ) : null}
              </div>
              <Link href="/auth/forgot-password">
                <a className={style.forgotPasswordLink}>Forgot Password?</a>
              </Link>
              <Button color="btnPrimary" size="btnBig" text="Login" disabled={state.sending} />
              <div className={style.stroke}>
                <span>Or</span>
              </div>
              <Button
                color="btnInverse"
                size="btnMedium"
                text="Sign Up With Google"
                icon="/icons/google.svg"
              />
            </form>
          </div>
        </div>
      </div>
    </Guest>
  );
};

export default Signin;
