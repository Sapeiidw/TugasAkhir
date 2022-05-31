import React, { useState } from "react";
import style from "../../styles/Modal.module.css";

type Props = {
  visible: boolean;
  children?: React.ReactNode;
  title: React.ReactNode;
  onOK: () => void;
  onCancel: () => void;
  onBack: () => void;
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

const Modal: React.FC<Props> = (props) => {
  // const [isOpen, setIsOpen] = useState<boolean>(props.visible || false);
  if (!props.visible) return <></>;
  else
    return (
      <div className={style.modalContainer}>
        <div className={style.modalCentered}>
          <div className={style.modal}>
            <div className={style.modalHeader}>
              <button
                className={style.modalBackButton}
                onClick={() => props.onBack()}
              >
                <img
                  src="/icons/backButton.svg"
                  alt=""
                  width={20}
                  height={20}
                />
              </button>
              <h2 className={style.modalTitle}>
                {props.title ? props.title : "Title"}
              </h2>
              <button
                className={style.modalActionClose}
                onClick={() => props.onCancel()}
              >
                <span></span>
                <span></span>
              </button>
            </div>
            <div className={style.modalBody}>{props.children}</div>
            <div className={style.modalFooter}>
              <button
                {...props.cancelButtonProps}
                onClick={() => props.onCancel()}
              >
                {props.cancelText ? props.cancelText : "Tutup"}
              </button>
              <button {...props.okButtonProps} onClick={() => props.onOK()}>
                {props.okText ? props.okText : "OK"}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Modal;
