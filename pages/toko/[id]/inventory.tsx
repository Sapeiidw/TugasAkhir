import Link from "next/link";
import { useRouter } from "next/router";
import React, {
  FormEvent,
  SyntheticEvent,
  useEffect,
  useReducer,
  useState,
} from "react";
import {
  Button,
  Input,
  ModalEmpty,
  Select,
  Table,
  Toko,
} from "../../../components";
import ErrorMsg from "../../../components/Forms/ErrorMsg";
import { ProductReducer } from "../../../reducer";
import { categories } from "../../../services/category.service";
import {
  addProduct,
  destroyProduct,
  products,
} from "../../../services/product.service";
import { store } from "../../../services/store.service";

import style from "../../../styles/Inventory.module.css";
import { Category, Product, Store, TableColumn } from "../../../types";

type Props = {};

const Inventory: React.FC<Props> = (props) => {
  const [modal, setModal] = useState<boolean>(false);
  const router = useRouter();
  const storeId = router.query.id;
  const [toko, setToko] = useState<Store>();
  const [produk, setProduk] = useState<Product[]>([]);
  const [produks, setProduks] = useState<Product[]>([]);
  const [kategori, setKategori] = useState<Category[]>([]);
  const [filter, setFilter] = useState("");
  const [state, dispatch] = useReducer(ProductReducer, {
    isSubmitted: false,
    sending: false,
    inputs: {
      categoryName: "",
      name: "",
      description: "",
      unit: 0,
      groceryPrice: 0,
      price: 0,
    },
    error: {
      statusCode: 0,
      message: "",
    },
  });
  const { isSubmitted, inputs, sending, error } = state;
  const { name, description, unit, groceryPrice, price, categoryName } = inputs;

  useEffect(() => {
    if (!router.isReady) return;
    store(storeId)
      .then((res) => {
        setToko(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });

    products(storeId)
      .then((res) => {
        setProduk(res.data.data);
        setProduks(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });

    categories()
      .then((res) => {
        setKategori(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [router.isReady]);

  const handleDelete = async (e: SyntheticEvent, id: any, index: number) => {
    setProduks(produk.filter((v, i) => i !== index));
    setProduk(produk.filter((v, i) => i !== index));
    destroyProduct(id, storeId);
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

  const handleAddProduct = (e: FormEvent) => {
    e.preventDefault();
    dispatch({ name: "SET_IS_SUBMITTED" });

    if (
      !name &&
      !description &&
      !unit &&
      !groceryPrice &&
      !price &&
      !categoryName
    )
      return;

    addProduct(storeId, inputs)
      .then((resp) => {
        dispatch({ name: "SET_SENDING", payload: true });
        setProduk([...produk, resp.data.data]);
      })
      .catch((error) => {
        dispatch({
          name: "SET_ERROR",
          payload: {
            statusCode: error.response.data.statusCode,
            message: error.response.data.message,
          },
        });
      })
      .finally(() => dispatch({ name: "SET_SENDING", payload: false }));
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
    {
      key: "id",
      title: "Action",
      render: (value, index) => (
        <Button
          text="Hapus"
          size="btnSmall"
          color="btnPrimary"
          onClick={(e) => handleDelete(e, value.id, index)}
        />
      ),
    },
  ];

  return (
    <Toko>
      {state.error.message}
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
            <Button
              text="Tambah Satuan"
              color="btnInverse"
              size="btnSmall"
              // icon="/icons/Plus.svg"
            />
            <Button
              text="Tambah Kategori"
              color="btnInverse"
              size="btnSmall"
              // icon="/icons/Plus.svg"
            />
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
          <Button
            // icon="/icons/Plus.svg"
            text="Tambah Produk"
            size="btnSmall"
            color="btnPrimary"
            onClick={() => setModal(true)}
          />
        </div>
        {produk[0] ? (
          <div className="x-auto">
            <Table columns={productColumn} data={produk} />
          </div>
        ) : (
          <div className={style.emptyInventory}>
            <img src="/images/produkKosong.svg" alt="" />
            <h4 className="text-primary">Belum ada produk</h4>
          </div>
        )}
      </div>
      <ModalEmpty
        title="Tambah Produk"
        visible={modal}
        onOK={() => null}
        onCancel={() => setModal(!modal)}
        footer={<></>}
      >
        {error.message}
        <form
          onSubmit={(e) => handleAddProduct(e)}
          className="flex flex-column gap-10"
        >
          <div>
            <Input
              name="name"
              onChange={(e) =>
                dispatch({
                  name: "SET_INPUTS",
                  payload: { name: (e.target as HTMLInputElement).value },
                })
              }
              placeholder="Nama Produk"
              type="text"
              label="Nama Produk"
            />
            <ErrorMsg
              isSubmitted={isSubmitted}
              value={name}
              isEmpty={!name}
              name="Nama Produk"
              min={4}
              max={12}
            />
          </div>
          <div>
            <Select
              data={kategori}
              k="name"
              label="Kategori"
              name="categoryName"
              onChange={(e) =>
                dispatch({
                  name: "SET_INPUTS",
                  payload: {
                    categoryName: (e.target as HTMLSelectElement).value,
                  },
                })
              }
            />
            <ErrorMsg
              isSubmitted={isSubmitted}
              value={categoryName}
              isEmpty={!categoryName}
              name="Category"
            />
          </div>
          <div>
            <Input
              name="description"
              onChange={(e) =>
                dispatch({
                  name: "SET_INPUTS",
                  payload: {
                    description: (e.target as HTMLInputElement).value,
                  },
                })
              }
              placeholder="Deskripsi Produk"
              type="text"
              label="Deskripsi Produk"
            />
            <ErrorMsg
              isSubmitted={isSubmitted}
              value={description}
              isEmpty={!description}
              name="Deskripsi"
              min={4}
              max={12}
            />
          </div>
          <div>
            <Input
              name="groceryPrice"
              onChange={(e) =>
                dispatch({
                  name: "SET_INPUTS",
                  payload: {
                    groceryPrice: (e.target as HTMLInputElement).valueAsNumber,
                  },
                })
              }
              placeholder="Harga Modal"
              type="number"
              label="Harga Modal"
            />
            <ErrorMsg
              isSubmitted={isSubmitted}
              value={groceryPrice.toLocaleString()}
              isEmpty={!groceryPrice}
              name="Harga Modal"
              min={4}
              max={12}
            />
          </div>

          <div className="flex-row-center gap-10">
            <div>
              <Select
                k=""
                data={[{ satuan: "Lusin", unit: "12" }]}
                name=""
                label="Satuan"
                onChange={() => null}
              />
            </div>
            <div>
              <Input
                name="price"
                onChange={(e) =>
                  dispatch({
                    name: "SET_INPUTS",
                    payload: {
                      price: (e.target as HTMLInputElement).valueAsNumber,
                    },
                  })
                }
                placeholder="Harga Jual"
                type="number"
                label="Harga Jual"
              />
              <ErrorMsg
                isSubmitted={isSubmitted}
                value={price.toLocaleString()}
                isEmpty={!price}
                name="Harga Modal"
                min={4}
                max={12}
              />
            </div>
          </div>
          <Button
            type="submit"
            text="Simpan Produk"
            size="btnBig"
            color="btnPrimary"
            onClick={(e) => handleAddProduct(e)}
          />
        </form>
      </ModalEmpty>
    </Toko>
  );
};

export default Inventory;
