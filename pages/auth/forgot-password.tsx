import Image from "next/image";
import Link from "next/link";
import Router from "next/router";
import React, { FormEvent, useReducer } from "react";
import { Button, Guest, Input } from "../../components";
import ErrorMsg from "../../components/Forms/ErrorMsg";
import { ForgotPasswordReducer } from "../../reducer";

import style from "../../styles/Auth.module.css";

type Props = {};

const ForgotPassword: React.FC<Props> = (props) => {
  return (
    <Guest>
      <div className={style.forgotPassword}>
        <div className={style.forgotPasswordWrapper}>
          <div className={style.img}>
            <Image
              src="/images/Currency Crush Security.svg"
              layout="fill"
              alt="curency crush security"
            />
          </div>
          <div className={style.forgotPasswordText}>
            <h1 className={style.forgotPasswordTitle}>Forgot your password?</h1>
            <p className={style.forgotPasswordSubtitle}>
              No worries, we’ll send you reset instruction
            </p>
          </div>
          <form
            // onSubmit={(e) => handleSubmit(e)}
            className={style.forgotPasswordForm}
          >
            <Input
              onChange={(event) => null}
              type="email"
              name="email"
              placeholder="Your Email"
              value={null}
              required={false}
            />
            <ErrorMsg
              name="Email"
              value={"strig"}
              isEmpty={!null}
              isSubmitted={false}
            />
            <Button color="btnPrimary" size="btnBig" text="Send me an email" />
          </form>
          <Link href="/auth/signin">
            <a>Back to Login</a>
          </Link>
        </div>
      </div>
    </Guest>
  );
};

export default ForgotPassword;
