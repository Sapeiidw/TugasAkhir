import Image from "next/image";
import Link from "next/link";
import React, { ReactNode, SyntheticEvent } from "react";
import { ButtonHTMLAttributes } from "react";
import style from "../../styles/Button.module.css";

type Props = {
  color: string;
  href: string;
  target?: string;
  text: string;
  size: string;
  icon?: string;
  className?: string;
  disabled?: boolean;
};

const ButtonLink: React.FC<Props> = (props) => {
  return (
    <Link href={props.href}>
      <a
        target={props.target}
        rel={props.target && "noreferrer"}
        className={`${style.btn}  ${props.size} ${props.color} ${props.className}`}
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
      </a>
    </Link>
  );
};

export default ButtonLink;
