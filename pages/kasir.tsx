import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Button, ButtonLink, Input, Pos } from "../components";
import ProductCard from "../components/Cards/ProductCard";
import { GetAllInventory } from "../services/inventory.service";
import style from "../styles/Kasir.module.css";
import { Inventory } from "../types";

type Props = {};

const Kasir = (props: Props) => {
  const router = useRouter();
  const storeId = router.query.id;
  const [inventories, setInventories] = useState<Inventory[]>([]);
  useEffect(() => {
    GetAllInventory(storeId)
      .then((res) => {
        setInventories(res.data.data);
      })
      .catch((err) => {});
  }, [router.isReady]);

  return (
    <Pos>
      <div className={style.main}>
        <div className={style.sidebar}>
          <div className={style.toko}>
            <div className={style.tokoLogo}></div>
            <div className={style.tokoName}>Inposery</div>
          </div>
          <div className={style.kategori}>
            <div className={style.title}>Kategori</div>
            <div className={style.items}>
              {Array(100)
                .fill("asd")
                .map((_, idx) => (
                  <div className="flex-row-center gap-10" key={idx}>
                    <input
                      type="checkbox"
                      name="aiya"
                      id={`aiya${idx}`}
                      value={idx}
                    />
                    <label htmlFor={`aiya${idx}`}>{idx}</label>
                  </div>
                ))}
            </div>
          </div>
          <div className={style.footer}>
            <ButtonLink
              text="Kembali"
              color="btnPrimary"
              size="btnFull"
              href="/toko"
            />
          </div>
        </div>
        <div className={style.content}>
          <form onSubmit={() => null} className={style.header}>
            <Input
              name="produk"
              placeholder="Cari produk ..."
              type="text"
              onChange={() => null}
            />
            <Button
              text="Cari"
              type="submit"
              size="btnMedium"
              color="btnPrimary"
            />
          </form>
          <div className={style.produk}>
            {inventories.map((item, index) => (
              <ProductCard data={item} key={item.id} onClick={() => null} />
            ))}
          </div>
        </div>
        <div className={style.orderContainer}>
          <div className={style.title}>Pesanan Terbaru</div>
          <div className={style.items}>
            {Array(100)
              .fill("asd")
              .map((_, idx) => (
                <div className={style.item} key={idx}>
                  <div className={style.orderImg}></div>
                  <div className="flex-col">
                    <div className="flex-row">
                      <div className="flex-col">
                        <div className={style.orderName}>Produk {idx}</div>
                        <div className={style.orderDeskripsi}>Deskripsi.</div>
                      </div>
                      <div className={style.orderPrice}>Rp. {idx}000</div>
                    </div>
                    <div className="flex-row">
                      <div className={style.orderQty}>
                        <button>-</button>
                        <input type="number" value={1000} min={1} />
                        <button>+</button>
                      </div>
                      <button className={style.deleteOrder}>X</button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <div className={style.form}>
            <div className={style.subTotal}>
              <div className={style.title}>Subtotal</div>
              <div className={style.value}>Rp. 0</div>
            </div>
            <div className={style.discount}>
              <div className={style.title}>Discount</div>
              <div className={style.value}>Rp. 0</div>
            </div>
            <Button
              text="Bayar"
              color="btnPrimary"
              size="btnBig"
              onClick={() => null}
            />
          </div>
        </div>
      </div>
    </Pos>
  );
};

export default Kasir;
