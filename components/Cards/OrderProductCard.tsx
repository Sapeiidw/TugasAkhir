import Image from "next/image";
import React, { SyntheticEvent, useEffect, useState } from "react";
import { AddItem2Order } from "../../services/pos.service";
import style from "../../styles/Kasir.module.css";

type Props = {
  key: number;
  data: any;
  bayar: boolean;
  orderID?: number;
  onClick: (e: SyntheticEvent) => void;
};

const OrderProductCard = (props: Props) => {
  useEffect(() => {
    if (props.bayar) {
      AddItem2Order(props.orderID, {
        inventoryId: props.data.id,
        quantity: qty,
      })
        .then((res) => {
          console.log("berhasil", res.data.data);
        })
        .catch((err) => {
          console.log("berhasil", err);
        });
    }
  }, [props.bayar]);

  const [qty, setQty] = useState(props.data.quantity || 1);
  return (
    <>
      <div className={style.item} key={props.key}>
        <div className={style.orderImg}>
          <Image src={"/images/avatar.png"} layout="fill" objectFit="cover" />
        </div>
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
