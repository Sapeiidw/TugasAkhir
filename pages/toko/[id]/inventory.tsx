import Link from "next/link";
import { useRouter } from "next/router";
import React, { FormEvent, SyntheticEvent, useEffect, useState } from "react";
import { Table, Toko } from "../../../components";
import {
  store,
  products,
  productsDestroy,
} from "../../../services/store.service";
import style from "../../../styles/Inventory.module.css";
import { Product, Store, TableColumn } from "../../../types";

type Props = {};

const Inventory: React.FC<Props> = (props) => {
  const router = useRouter();
  const id = router.query.id;
  const [toko, setToko] = useState<Store>();
  const [produk, setProduk] = useState<Product[]>([]);
  const [produks, setProduks] = useState<Product[]>([]);
  const [filter, setFilter] = useState("");
  useEffect(() => {
    if (!router.isReady) return;
    store(id)
      .then((res) => {
        setToko(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
    products(id)
      .then((res) => {
        setProduk(res.data.data);
        setProduks(res.data.data);
        console.log(produk);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [router.isReady]);

  const handleDelete = async (e: SyntheticEvent, id: any, index: number) => {
    setProduks(produk.filter((v, i) => i !== index));
    setProduk(produk.filter((v, i) => i !== index));
    productsDestroy(id);
  };

  const hanldeSearch = (e: SyntheticEvent) => {
    const search = (e.target as HTMLInputElement).value;
    if (search == "") {
      setProduk(produks);
      return;
    }
    const result = produk.filter((val) =>
      val.name.toLowerCase().includes(search.toLowerCase())
    );
    setProduk(result);
  };

  const productColumn: TableColumn<Product>[] = [
    {
      key: "id",
      title: "NO",
      dataType: "numbering",
    },
    {
      key: "id",
      title: "ID",
    },
    {
      key: "name",
      title: "Name",
    },
    {
      key: "category",
      title: "Category",
      render: (value) => `${value.category.name}`,
    },
    {
      key: "unit",
      title: "Stock",
    },
    {
      key: "price",
      title: "Modal",
      render: (value) => `${value.price.toLocaleString()}`,
    },
    {
      key: "groceryPrice",
      title: "Modal",
      render: (value) => `${value.groceryPrice.toLocaleString()}`,
    },
    {
      key: "description",
      title: "Deskripsi",
    },
  ];
  return (
    <Toko>
      <header>
        <div className={`.flex-row ${style.inventoryToko}`}>
          <img src="/images/avatar.png" alt="avatar" />
          <div className="flex-col">
            <h1>{toko?.name}</h1>
            <p>{toko?.address}</p>
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
          <select
            name=""
            id=""
            onChange={(e) => setFilter((e.target as HTMLSelectElement).value)}
          >
            <option value="filter">filter</option>
            <option value="nama">nama</option>
            <option value="kategori">kategori</option>
          </select>
          <input
            type="text"
            placeholder="Cari produk..."
            onChange={(e) => hanldeSearch(e)}
          />
          <button>Tambah Produk</button>
        </div>
        <div className="x-auto">
          <Table columns={productColumn} data={produk} />
          {/* <table>
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
                {produk.map((item, index) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.category.name}</td>
                    <td>{item.unit.toLocaleString()}</td>
                    <td>Rp. {item.price.toLocaleString()}</td>
                    <td>Rp. {item.groceryPrice.toLocaleString()}</td>
                    <td>{item.description}</td>
                    <td className={style.action}>
                      <button>Edit</button>
                      <button onClick={(e) => handleDelete(e, item.id, index)}>
                        Hapus
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            )}
          </table> */}
        </div>
        {!produk && (
          <div className={style.emptyInventory}>
            <img src="/images/produkKosong.svg" alt="" />
            <h4 className="text-primary">Belum ada produk</h4>
          </div>
        )}
      </div>
    </Toko>
  );
};

export default Inventory;
