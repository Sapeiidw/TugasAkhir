import Link from "next/link";
import { useRouter } from "next/router";
import React, { FormEvent, useEffect, useState } from "react";
import { Toko } from "../../../components";
import style from "../../../styles/Inventory.module.css";

type Props = {};

const Index: React.FC<Props> = (props) => {
  const router = useRouter();
  const storeId = router.query.id;

  useEffect(() => {
    if (!router.isReady) return;
  }, [router.isReady]);

  return (
    <>
      <Toko>Dashboard Toko {storeId}</Toko>
    </>
  );
};

export default Index;
