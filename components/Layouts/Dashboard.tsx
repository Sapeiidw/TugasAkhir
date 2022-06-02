import Image from "next/image";
import Link from "next/link";
import React from "react";
import { userService } from "../../services";
import style from "../../styles/Dashboard.module.css";

type Props = {};

const Dashboard: React.FC<Props> = (props) => {
  const avatar = () => {
    userService.avatar().then((response) => {
      console.log(response);
      return (
        <div className={style.avatar}>
          <Image
            src={response.data.avatar}
            alt="avatar"
            width={150}
            height={150}
          />
        </div>
      );
    });
  };
  return (
    <>
      <nav className={style.nav}>
        <div className={style.start}>
          <div className={style.diamonds}>
            <Image src="/icons/diamonds.svg" alt="logo" layout="fill" />
          </div>
          <div className={style.logo}>
            <Image src="/icons/InPOSery.svg" alt="logo" layout="fill" />
          </div>
        </div>
        <div className={style.end}>
          <div className={style.notif}>
            <Image src="/icons/bell.svg" alt="logo" layout="fill" />
          </div>
          {avatar()}
          <div className={style.profile}></div>
        </div>
      </nav>
      <div className={style.sidebar}>
        <div className={style.sidebarTop}>
          <Link href="/">
            <a className={style.sidebarItems}>
              <img src="/icons/home.svg" alt="" />
              Home
            </a>
          </Link>
          <Link href="/">
            <a className={style.sidebarItems}>
              <img src="/icons/ntah.svg" alt="" />
              Home
            </a>
          </Link>
          <Link href="/">
            <a className={style.sidebarItems}>
              <img src="/icons/fileSetting.svg" alt="" />
              Home
            </a>
          </Link>
        </div>
        <div className={style.sidebarBottom}>
          <Link href="/">
            <a className={style.sidebarItems}>
              <img src="/icons/questionCircle.svg" alt="" />
              F.A.Q
            </a>
          </Link>
        </div>
      </div>
      <main className={style.main}>{props.children}</main>
    </>
  );
};

export default Dashboard;
