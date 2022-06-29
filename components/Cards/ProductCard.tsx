import Image from "next/image";
import React, { SyntheticEvent } from "react";
import style from "../../styles/Kasir.module.css";

type Props = {
  key: number;
  data: any;
  onClick: (e: SyntheticEvent) => void;
};

const ProductCard: React.FC<Props> = (props) => {
  return (
    <>
      <div className={style.produkCard} key={props.key} onClick={props.onClick}>
        <div className={style.produkStok}>{props.data.stock}</div>
        <div className={style.produkCardImg}>
          <Image
            src="/images/avatar.png"
            alt={props.data.product.name}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className={style.produkCardText}>
          <div className={style.title}>{props.data.product.name}</div>
          <p className={style.description}>{props.data.product.description}</p>
          <p className={style.price}>
            Rp.{props.data.product.price}/{props.data.product.unit}
          </p>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
