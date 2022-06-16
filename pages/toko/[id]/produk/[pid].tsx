import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { product } from "../../../../services/store.service";

type Props = {};

const Single: React.FC<Props> = (props) => {
  const router = useRouter();
  const pid = router.query.pid;
  const [produk, setProduk] = useState([]);
  useEffect(() => {
    if (!router.isReady) return;
    product(pid)
      .then((res) => {
        setProduk(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [router.isReady]);

  return (
    <div>
      Single {pid} {JSON.stringify(produk)}
    </div>
  );
};

export default Single;
