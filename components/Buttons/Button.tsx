import Image from "next/image";
import React, { SyntheticEvent } from "react";
import style from "../../styles/Button.module.css";

type Props = {
  color: string;
  type?: string;
  text: string;
  size: string;
  icon?: string;
  className?: string;
  onClick?: (e: SyntheticEvent) => void;
};

const Button: React.FC<Props> = (props) => {
  return (
    <button className={`${style.btn} ${props.type} ${props.size} ${props.color}`} onClick={props.onClick}>
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
