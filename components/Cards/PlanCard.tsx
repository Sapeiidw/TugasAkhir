import React, { SyntheticEvent } from "react";
import { Button } from "..";
import style from "../../styles/Cards.module.css";
import { SubscribePlan } from "../../types";

type Props = {
  data: SubscribePlan;
  recomend?: boolean;
  onClick?: (e: SyntheticEvent) => void;
};

const PlanCard: React.FC<Props> = (props) => {
  if (!props.data) return <></>;
  return (
    <>
      <div
        className={`${style.planCard} ${
          props.recomend && style.planCardRecomend
        }`}
      >
        <div className={style.planTitle}>{props.data.name}</div>
        <ul className={style.planFeatures}>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
        </ul>
        <p className={style.planPrice}>
          Rp.<span>{props.data.price}</span>/{props.data.unit}
        </p>
        <Button
          size="btnBig"
          color="btnPrimary"
          onClick={props.onClick}
          text="Choose"
        />
      </div>
    </>
  );
};

export default PlanCard;
