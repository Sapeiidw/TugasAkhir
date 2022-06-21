import React from "react";
import style from "../../styles/Auth.module.css";

type Props = {
  k: string;
  name: string;
  label: string;
  data: any[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  required?: boolean;
};

const Select: React.FC<Props> = (props) => {
  return (
    <>
      <div className={style.formGroup}>
        <label htmlFor={props.name}>{props.label}</label>
        <select name={props.name} id={props.name}>
          {props.data.map((item, index) => {
            return (
              <option key={index} value={item[props.k]}>
                {item[props.k]}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
};

export default Select;
