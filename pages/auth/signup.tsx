import Image from "next/image";
import Link from "next/link";
import React, { FormEvent, useReducer } from "react";
import { Button, Guest, Input } from "../../components";
import ErrorMsg from "../../components/Forms/ErrorMsg";
import { RegisterReducer } from "../../reducer";
import { register } from "../../services/auth.service";
import style from "../../styles/Auth.module.css";

type Props = {};

const Signup: React.FC<Props> = (props) => {
  //   const e = process.env.NEXT_PUBLIC_MAINTENANCE;

  const [state, dispatch] = useReducer(RegisterReducer, {
    isSubmitted: false,
    sending: false,
    inputs: {
      name: "",
      email: "",
      password: "",
      passwordConfirm: "",
      phone: "",
    },
  });

  const { isSubmitted, inputs } = state;
  const { name, email, password, passwordConfirm, phone } = inputs;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch({ name: "SET_IS_SUBMITTED" });

    if (!name && !email && !password && !phone) return;
    dispatch({ name: "SET_SENDING", payload: false });

    register(inputs)
      .then((resp) => {
        window.location.replace("/auth/signin");
      })
      .catch((error) => console.log("error", error))
      .finally(() => dispatch({ name: "SET_SENDING", payload: false }));
  };

  return (
    <Guest>
      <div className="flex-row-center">
        <div className={style.banner}>
          <div className={style.header}>
            <h1 className={style.title}>Lets Get Started For Free </h1>
            <p className={style.subtitle}>Gets your 14 Days Free Trial</p>
          </div>
          <div className={style.img}>
            <Image
              src="/images/signIlustration.svg"
              layout="fill"
              alt="signup illustration"
            />
          </div>
          <div className={style.footer}>
            Sistem POS dan manajemen Inventori terbaik untuk Toko anda
          </div>
        </div>
        <div className={style.signForm}>
          <div className={style.wrapper}>
            <div className={style.text}>
              <h1 className={style.title}>SIGN UP</h1>
              <h1 className={style.subtitle}>
                Already have an account?{" "}
                <Link href="/auth/signin">
                  <a>Login here.</a>
                </Link>
              </h1>
            </div>

            <form className={style.form} onSubmit={(e) => handleSubmit(e)}>
              <Input
                type="text"
                name="name"
                placeholder="Name"
                label="Name"
                value={state.inputs.name}
                required={true}
                onChange={(event) =>
                  dispatch({
                    name: "SET_INPUTS",
                    payload: {
                      name: (event.target as HTMLInputElement).value,
                    },
                  })
                }
              />
              <ErrorMsg
                name="Name"
                value={name}
                isEmpty={!name}
                isSubmitted={isSubmitted}
              />
              <Input
                type="email"
                name="email"
                placeholder="Email"
                label="Email"
                value={state.inputs.email}
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
                name="Email"
                value={email}
                isEmpty={!email}
                isSubmitted={isSubmitted}
              />
              <Input
                type="password"
                name="password"
                placeholder="Password"
                label="Password"
                value={state.inputs.password}
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
                name="Password"
                value={password}
                isEmpty={!password}
                isSubmitted={isSubmitted}
              />
              <Input
                type="password"
                name="passwordConfirm"
                placeholder="Password Confirm"
                label="Password Confirm"
                value={state.inputs.passwordConfirm}
                required={true}
                onChange={(event) =>
                  dispatch({
                    name: "SET_INPUTS",
                    payload: {
                      passwordConfirm: (event.target as HTMLInputElement).value,
                    },
                  })
                }
              />
              <ErrorMsg
                name="Password"
                value={password}
                isEmpty={!password}
                isSubmitted={isSubmitted}
              />
              <Input
                type="text"
                name="phone"
                placeholder="Phone Number"
                label="Phone Number"
                value={state.inputs.phone}
                required={true}
                onChange={(event) =>
                  dispatch({
                    name: "SET_INPUTS",
                    payload: {
                      phone: (event.target as HTMLInputElement).value,
                    },
                  })
                }
              />
              <ErrorMsg
                name="Phone Number"
                value={phone}
                isEmpty={!phone}
                isSubmitted={isSubmitted}
              />
              <br />
              <Button
                color="btnPrimary"
                size="btnBig"
                text="Create Your Account"
              />
              <div className={style.stroke}>
                <span>Or</span>
              </div>
              <Button
                color="btnInverse"
                text="Sign Up With Google"
                icon="/icons/google.svg"
                size="btnBig"
              />
            </form>
          </div>
        </div>
      </div>
    </Guest>
  );
};

export default Signup;
