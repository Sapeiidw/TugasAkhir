import Image from "next/image";
import React, { useState } from "react";
import Notification from "./Notification";
import style from "../../styles/Dashboard.module.css";
import Link from "next/link";

type Props = {};

const NavigationToko: React.FC<Props> = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className={style.nav}>
        <div className={style.start}>
          <div className={style.diamonds}>
            <Image src="/icons/diamonds.svg" alt="logo" layout="fill" />
          </div>
          <Link href={"/toko"}>
            <a className={style.logo}>
              <Image src="/icons/InPOSery.svg" alt="logo" layout="fill" />
            </a>
          </Link>
        </div>
        <div className={style.end}>
          <div className={style.notif}>
            <Image
              src="/icons/bell.svg"
              alt="logo"
              layout="fill"
              onClick={() => setIsOpen(!isOpen)}
            />
            <Notification visible={isOpen} />
          </div>
          <div className={style.profile}></div>
        </div>
      </nav>
    </>
  );
};

export default NavigationToko;
