import Image from "next/image";
import React from "react";
import { Button, Guest } from "../components";
import style from "../styles/CustomPage.module.css";

const Custom404 = () => {
  return (
    <Guest>
      <div className={style.page}>
        <div className={style.wraper}>
          <div className={style.img}>
            <Image
              src="/images/Humaaans 1 Character.svg"
              layout="fill"
              alt="404"
            />
            <div className={style.text}>404</div>
          </div>
          <div>
            <div className={style.title}>Oopss...</div>
            <div className={style.subtitle}>Page not Found</div>
          </div>
          <Button color="btnPrimary" size="btnBig" text="Back" />
        </div>
      </div>
    </Guest>
  );
};

export default Custom404;
