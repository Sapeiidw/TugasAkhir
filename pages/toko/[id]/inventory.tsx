import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Toko } from "../../../components";
import { store } from "../../../services/store.service";

type Props = {};

const Inventory: React.FC<Props> = (props) => {
  const router = useRouter();
  const id = router.query.id;

  const [toko, setToko] = useState([]);
  useEffect(() => {
    if (!router.isReady) return;
    store(id).then((res) => {
      setToko(res.data);
    });
  }, [router.isReady]);

  return <Toko></Toko>;
};

export default Inventory;
