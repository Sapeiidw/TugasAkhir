import React, { SyntheticEvent } from "react";
import useForm from "../../hooks/useForm";
import style from "../../styles/Auth.module.css";

type Props = {
  type: string;
  name: string;
  label?: string;
  placeholder: string;
  className?: string;
  onChange: (e: SyntheticEvent) => void;
  value?: any;
  required?: boolean;
  min?: number;
  max?: number;
};

const Input: React.FC<Props> = (props) => {
  return (
    <>
      <div className={style.formGroup}>
        {props.label && <label htmlFor={props.name}>{props.label}</label>}
        <input
          type={props.type}
          name={props.name}
          placeholder={props.placeholder}
          onChange={props.onChange}
          required={props.required}
          min={props.min}
          max={props.max}
        />
      </div>
    </>
  );
};

export default Input;
