import Link from "next/link";
import React from "react";
import { Button, Input, Toko } from "../../components";
import style from "../../styles/Inventory.module.css";

type Props = {};

const Inventory: React.FC<Props> = (props) => {
  const produk = 1;
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
              <Link href={""}>Dashboard</Link> /{" "}
              <Link href={""}>Inventory</Link>
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
            {/* <Input
              name="search"
              onChange={() => null}
              placeholder="Cari produk"
              type="text"
              value=""
            />
            <Button
              text="+ Barang"
              color="btnPrimary"
              size="btnSmall"
              onClick={() => null} 
            />*/}
          </div>
          <div className="x-auto">
            <table>
              <thead>
                <th>Id Barang</th>
                <th>Nama</th>
                <th>Kategori</th>
                <th>Stok</th>
                <th>Harga</th>
                <th>Modal</th>
                <th>Keterangan</th>
                <th>Action</th>
              </thead>
              {produk > 0 && (
                <tbody>
                  <tr>
                    <td>Id Barang</td>
                    <td>Nama</td>
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
                  <tr>
                    <td>Id Barang</td>
                    <td>Nama</td>
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

export default Inventory;
