import React from "react";
import style from "../../styles/Dashboard.module.css";

type Props = {
  name: string;
  address: string;
};

const StoreCard: React.FC<Props> = (props) => {
  return (
    <div className={style.card}>
      <div className={style.cardOption}>
        <img src="/icons/titik3.svg" alt="" />
      </div>
      <img src="/icons/home.svg" className={style.cardIcon}></img>
      <h1 className={style.cardTitle}>{props.name}</h1>
      <p className={style.cardSubitle}>{props.address}</p>
      <div className={style.cardProgress}></div>
    </div>
  );
};

export default StoreCard;
