import Image from "next/image";
import React from "react";
import style from "./Form.module.css";

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
        <select
          name={props.name}
          id={props.name}
          onChange={props.onChange}
          defaultValue={props.data[0][props.k]}
        >
          {/* <option value="">{props.name}</option> */}
          {props.data.map((item, index) => {
            return (
              <option key={index} value={item[props.k]}>
                {item[props.k]}
              </option>
            );
          })}
          <Image
            src={"/icons/arrow_down.svg"}
            width={24}
            height={24}
            layout={"fixed"}
          />
        </select>
      </div>
    </>
  );
};

export default Select;
