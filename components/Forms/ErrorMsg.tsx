import React from "react";

type Props = {
  name: string;
  value: string;
  isSubmitted?: boolean;
  isEmpty?: boolean;
  isEqual?: boolean;
  min?: number;
  max?: number;
  msg?: string;
};

const ErrorMsg: React.FC<Props> = (props) => {
  const {
    name = "",
    value = "",
    isSubmitted = false,
    isEmpty = false,
    min = 0,
    max = 99,
    msg = "",
    isEqual = false,
  } = props;
  return (
    <>
      {isSubmitted && (
        <span style={{ color: "red", width: "100%", textAlign: "left" }}>
          {isEmpty && `${name} tidak boleh kosong! `}
          {isEqual && `${name} tidak sama! `}
          {typeof value === "string" &&
            value.length < min &&
            `${name} minimal ${min} karakter! `}
          {typeof value === "number" &&
            value < min &&
            `${name} minimal ${min} karakter! `}
          {typeof value === "string" &&
            value.length > max &&
            `${name} maximal ${max} karakter! `}
          {typeof value === "number" &&
            value > max &&
            `${name} maximal ${max} karakter! `}
        </span>
      )}
    </>
  );
};

export default ErrorMsg;
