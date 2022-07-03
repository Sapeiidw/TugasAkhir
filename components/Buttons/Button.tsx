import Image from "next/image";
import React, { ReactNode, SyntheticEvent } from "react";
import style from "../../styles/Button.module.css";

type Props = {
  color: string;
  type?: "submit" | "reset" | "button" | undefined;
  text: string | ReactNode;
  size: string;
  icon?: string;
  className?: string;
  disabled?: boolean;
  close?: string | number;
  onClose?: (e: SyntheticEvent) => void;
  onClick?: (e: SyntheticEvent) => void;
};

const Button: React.FC<Props> = (props) => {
  return (
    <button
      type={props.type}
      className={`${style.btn}  ${props.size} ${props.color}`}
      onClick={props.onClick}
    >
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
      {props.close && (
        <button className={style.btnCloseIcon} onClick={props.onClose}>
          X
        </button>
      )}
    </button>
  );
};

export default Button;
