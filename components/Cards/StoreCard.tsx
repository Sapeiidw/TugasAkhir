import Link from "next/link";
import Router from "next/router";
import React from "react";
import { storeDestroy } from "../../services/store.service";
import style from "../../styles/Dashboard.module.css";

type Props = {
  id: number;
  link: string;
  name: string;
  address: string;
};

const StoreCard: React.FC<Props> = (props) => {
  const handleDelete = async () => {
    await storeDestroy(props.id);
    Router.reload();
  };
  return (
    <div className={style.card}>
      <div className={style.cardOption}>
        <img src="/icons/titik3.svg" alt="" />
        <div className={style.cardOptionItem}>
          <button onClick={() => handleDelete()}>Hapus {props.id}</button>
        </div>
      </div>
      <img src="/icons/home.svg" className={style.cardIcon}></img>
      <Link href={props.link}>
        <a>
          <h1 className={style.cardTitle}>{props.name}</h1>
        </a>
      </Link>
      <p className={style.cardSubitle}>{props.address}</p>
      <div className={style.cardProgress}></div>
    </div>
  );
};

export default StoreCard;
