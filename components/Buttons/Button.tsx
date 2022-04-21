import Image from "next/image";
import React, { SyntheticEvent } from "react";
import style from "../../styles/Button.module.css";

type Props = {
  type: string;
  text: string;
  icon?: string;
  className?: string;
  onClick?: (e: SyntheticEvent) => void;
};

const Button: React.FC<Props> = (props) => {
  // if (props.type == "btnPrimary") {
  //   return <button className={`${style.btn} ${style.btnPrimary}`} >{props.text}</button>
  // } else if (props.type == "btnInverse") {
  //   return <button className={`${style.btn} ${style.btnInverse}`} >
  //
  //     {props.text}
  //   </button>
  // } else {
  //   return <button className={`${style.btn} ${props.className}`} >{props.text}</button>
  // }
  return (
    <button className={`${style.btn} ${props.type}`} onClick={props.onClick}>
      {props.icon && (
        <Image
          src={props.icon}
          alt="google"
          layout="fixed"
          width="24px"
          height="24px"
          className={style.icon}
        />
      )}
      {props.text}
    </button>
  );
};

export default Button;
