import React, { SyntheticEvent, useState } from "react";
import style from "../../styles/Kasir.module.css";

type Props = {
  key: number;
  data: any;
  onClick: (E: SyntheticEvent) => void;
};

const OrderProductCard = (props: Props) => {
  const [qty, setQty] = useState(1);
  return (
    <>
      <div className={style.item} key={props.key}>
        <div className={style.orderImg}></div>
        <div className="flex-col">
          <div className="flex-row">
            <div className="flex-col">
              <div className={style.orderName}>{props.data.product.name}</div>
              <div className={style.orderDeskripsi}>
                {props.data.product.description}
              </div>
            </div>
            <div className={style.orderPrice}>
              Rp.{props.data.product.price}
            </div>
          </div>
          <div className="flex-row">
            <div className={style.orderQty}>
              <button onClick={() => qty > 1 && setQty(qty - 1)}>-</button>
              <input
                type="number"
                value={qty}
                min={1}
                onChange={(e) =>
                  setQty((e.target as HTMLInputElement).valueAsNumber)
                }
              />
              <button onClick={() => setQty(qty + 1)}>+</button>
            </div>
            <button className={style.deleteOrder} onClick={props.onClick}>
              X
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderProductCard;
