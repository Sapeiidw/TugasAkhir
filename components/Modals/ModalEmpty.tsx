import React, { useState } from "react";
import style from "../../styles/Modal.module.css";

type Props = {
  visible: boolean;
  children?: React.ReactNode;
  title: string;
  onOK: () => void;
  onCancel: () => void;
  footer: React.ReactNode;
  edit?: boolean;
};

const ModalEmpty: React.FC<Props> = (props) => {
  // const [isOpen, setIsOpen] = useState<boolean>(props.visible || false);
  if (!props.visible) return <></>;
  else
    return (
      <div className={style.modalContainer}>
        <div className={style.modalCentered}>
          <div className={style.modal}>
            <div className={style.modalClose} onClick={() => props.onCancel()}>
              X
            </div>
            <div className={style.modalHeader}>
              <div className={style.modalTitle}>{props.title} </div>
            </div>
            <div className={style.modalBody}>{props.children}</div>
            <div>{props.footer}</div>
          </div>
        </div>
      </div>
    );
};

export default ModalEmpty;
