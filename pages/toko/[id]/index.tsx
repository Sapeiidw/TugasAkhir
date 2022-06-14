import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Toko } from "../../../components";
import { store, products } from "../../../services/store.service";
import style from "../../../styles/Inventory.module.css";

type Props = {};

const Index: React.FC<Props> = (props) => {
  const router = useRouter();
  const id = router.query.id;
  const [toko, setToko] = useState([]);
  const [produk, setProduk] = useState([]);
  useEffect(() => {
    if (!router.isReady) return;
    store(id)
      .then((res) => {
        setToko(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    products(id)
      .then((res) => {
        setProduk(res.data.data);
        console.log(produk);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [router.isReady]);

  return (
    <>
      <Toko>
        <header>
          <div className={`.flex-row ${style.inventoryToko}`}>
            <img src="/images/avatar.png" alt="avatar" />
            <div className="flex-col">
              <h1>Inventory</h1>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="flex-row-center justify-between p-2">
            <div className="invetoryBreadcrumb">
              <Link href={"/"}>Dashboard</Link> /{" "}
              <Link href={"/"}>Inventory</Link>
            </div>
            <div className={style.inventoryFungsi}>
              <button>+ Satuan</button>
              <button>+ Kategori</button>
            </div>
          </div>
        </header>
        <div className={style.inventoryContent}>
          <div className={style.inventoryFilter}>
            <select name="" id="">
              <option value="filter">filter</option>
            </select>
            <input type="text" placeholder="Cari produk..." />
            <button>Tambah Produk</button>
          </div>
          <div className="x-auto">
            <table>
              <thead>
                <tr>
                  <th>Id Barang</th>
                  <th>Nama</th>
                  <th>Kategori</th>
                  <th>Stok</th>
                  <th>Harga</th>
                  <th>Modal</th>
                  <th>Keterangan</th>
                  <th>Action</th>
                </tr>
              </thead>
              {produk && (
                <tbody>
                  {produk.map((item) => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>Kategori</td>
                      <td>Stok</td>
                      <td>Harga</td>
                      <td>Modal</td>
                      <td>Keterangan</td>
                      <td className={style.action}>
                        <button>Edit</button>
                        <button>Hapus</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              )}
            </table>
          </div>
          {!produk && (
            <div className={style.emptyInventory}>
              <img src="/images/produkKosong.svg" alt="" />
              <h4 className="text-primary">Belum ada produk</h4>
            </div>
          )}
        </div>
      </Toko>
    </>
  );
};

export default Index;
