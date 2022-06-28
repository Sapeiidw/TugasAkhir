import React from "react";
import { Button, ButtonLink, Pos } from "../components";
import style from "../styles/Kasir.module.css";

type Props = {};

const Kasir = (props: Props) => {
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
                  <div className="flex-row-center gap-10">
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
          <div className={style.header}></div>
          <div className={style.produk}>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
          </div>
        </div>
        <div className={style.order}>
          <div className={style.title}>Pesanan Terbaru</div>
          <div className={style.items}>
            {Array(100)
              .fill("asd")
              .map((_, idx) => (
                <div className={style.item}>
                  <div className={style.produkImg}></div>
                  <div className="flex-col">
                    <div className="flex-row">
                      <div className="flex-col">
                        <div className={style.produkName}>Produk {idx}</div>
                        <div className={style.produkDeskripsi}>Deskripsi.</div>
                      </div>
                      <div className={style.produkPrice}>Rp. {idx}000</div>
                    </div>
                    <div className="flex-row">
                      <div className={style.produkQty}>
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
