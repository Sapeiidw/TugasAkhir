import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Notification from "../Navigations/Notification";
import style from "../../styles/Dashboard.module.css";
import { useRouter } from "next/router";

type Props = {};

const Toko: React.FC<Props> = (props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const router = useRouter();
  // console.log(router.pathname);
  // console.log(router.query);
  // console.log(router.asPath);
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
      <div className={style.sidebar}>
        <div className={style.sidebarTop}>
          <Link href={`/toko/${router.query.id}`}>
            <a
              className={`${
                router.pathname == "/toko/[id]" ? style.active : ""
              } ${style.sidebarItems}`}
            >
              <img src="/icons/dashboard.svg" alt="" />
              dashboard
            </a>
          </Link>
          <Link href={`/toko/${router.query.id}/inventory`}>
            <a
              className={`${
                router.pathname == `/toko/[id]/inventory` ? style.active : ""
              } ${style.sidebarItems}`}
            >
              <img src="/icons/inventory.svg" alt="" />
              inventory
            </a>
          </Link>
          <Link href={`/toko/${router.query.id}/produk`}>
            <a
              className={`${
                router.pathname == `/toko/[id]/produk` ? style.active : ""
              } ${style.sidebarItems}`}
            >
              <img src="/icons/inventory.svg" alt="" />
              produk
            </a>
          </Link>
          <Link href="/">
            <a
              className={`${router.pathname == "/" ? style.active : ""} ${
                style.sidebarItems
              }`}
            >
              <img src="/icons/transaksi.svg" alt="" />
              transaksi
            </a>
          </Link>
          <Link href="/">
            <a
              className={`${router.pathname == "/" ? "active" : ""} ${
                style.sidebarItems
              }`}
            >
              <img src="/icons/laporan.svg" alt="" />
              laporan
            </a>
          </Link>
          <Link href="/">
            <a
              className={`${router.pathname == "/" ? "active" : ""} ${
                style.sidebarItems
              }`}
            >
              <img src="/icons/manajemen.svg" alt="" />
              manajemen
            </a>
          </Link>

          <Link href="/">
            <a
              className={`${router.pathname == "/" ? "active" : ""} ${
                style.sidebarItems
              }`}
            >
              <img src="/icons/pengaturan.svg" alt="" />
              pengaturan
            </a>
          </Link>
        </div>
        <div className={style.sidebarBottom}>
          <Link href="/">
            <a
              className={`${router.pathname == "/" ? "active" : ""} ${
                style.sidebarItems
              }`}
            >
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

export default Toko;
