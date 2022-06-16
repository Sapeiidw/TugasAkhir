import Link from "next/link";
import { useRouter } from "next/router";
import React, { FormEvent, useEffect, useState } from "react";
import { Toko } from "../../components";
import { store, products, productsDestroy } from "../../services/store.service";
import style from "../../../styles/Inventory.module.css";

type Props = {};

const Inventory: React.FC<Props> = (props) => {
  const produk = 1;
  return (
    <>
      <Toko></Toko>
    </>
  );
};

export default Inventory;
