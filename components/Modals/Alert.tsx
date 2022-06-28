import React from "react";
import Button from "../Buttons/Button";
import style from "../../styles/Modal.module.css";

type Props = {
  visible: boolean;
  children?: React.ReactNode;
  title: string;
  message: string;
  onOK: () => void;
  onCancel: () => void;
  okText?: React.ReactNode;
  cancelText?: React.ReactNode;
  okButtonProps?: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >;
  cancelButtonProps?: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >;
};

const Alert: React.FC<Props> = (props) => {
  if (!props.visible) return <></>;
  return (
    <>
      <div className={style.alertContainer}>
        <div className={style.alert}>
          <div className={style.circle}></div>
          <div className={style.text}>
            <h2>{props.title}</h2>
            <p>{props.message}</p>
          </div>
          <div className="flex-row-center gap-10">
            <Button
              color="btnInverse"
              size="btnBig"
              {...props.cancelButtonProps}
              onClick={() => props.onCancel()}
              text={`${props.cancelText ? props.cancelText : "Tutup"}`}
            />

            <Button
              {...props.okButtonProps}
              onClick={() => props.onOK()}
              color="btnPrimary"
              size="btnBig"
              text={`${props.okText ? props.okText : "OK"}`}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Alert;
