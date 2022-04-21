import React, { useEffect, useState } from "react";

type Props = {
  open: boolean;
  hide: () => void;
};

const Modal: React.FC<Props> = (props) => {
  return (
    <div className={`${props.open && "modal-container"}`}>
      <div className={`${props.open && "open"} modal`}>
        <button onClick={() => props.hide()} className="closeButton">
          X
        </button>
        {props.children}
      </div>
    </div>
  );
};

export default Modal;
