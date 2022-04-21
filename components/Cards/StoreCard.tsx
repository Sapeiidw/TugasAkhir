import React from "react";
import style from "../../styles/Dashboard.module.css";

type Props = {};

const StoreCard: React.FC<Props> = (props) => {
  return (
    <div className={style.card}>
      <div className={style.cardOption}>
        <img src="/icons/titik3.svg" alt="" />
      </div>
      <img src="/icons/home.svg" className={style.cardIcon}></img>
      <h1 className={style.cardTitle}>Inposery Store 2</h1>
      <p className={style.cardSubitle}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque,
        nostrum!
      </p>
      <div className={style.cardProgress}></div>
    </div>
  );
};

export default StoreCard;
