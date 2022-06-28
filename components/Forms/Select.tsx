import Image from "next/image";
import React from "react";
import style from "./Form.module.css";

type Props = {
  k: string | number;
  kValue?: string;
  value?: string | number;
  name: string;
  label?: string;
  data: any[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  required?: boolean;
};

const Select: React.FC<Props> = (props) => {
  console.log(props);
  return (
    <>
      <div className={style.formGroup}>
        <label htmlFor={props.name}>{props.label}</label>
        <div className={style.select}>
          <select
            name={props.name}
            id={props.name}
            onChange={props.onChange}
            value={props.value}
          >
            {props.data.map((item, index) => {
              return (
                <option
                  key={index}
                  value={item[props.kValue ? props.kValue : props.k]}
                >
                  {item[props.k]}
                </option>
              );
            })}
          </select>
          <div className={style.arrow}>
            <Image
              alt="arrow"
              src={"/icons/arrow-forward.svg"}
              layout={"fill"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Select;
