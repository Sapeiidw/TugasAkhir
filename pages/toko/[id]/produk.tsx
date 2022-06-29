import Link from "next/link";
import { useRouter } from "next/router";
import React, {
  FormEvent,
  SyntheticEvent,
  useEffect,
  useMemo,
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
import { GetAllCategories } from "../../../services/category.service";
import {
  addProduct,
  destroyProduct,
  products,
  updateProduct,
} from "../../../services/product.service";
import { store } from "../../../services/store.service";

import style from "../../../styles/Inventory.module.css";
import { Category, Product, Store, TableColumn } from "../../../types";

type Props = {};

const Produk: React.FC<Props> = (props) => {
  const [modal, setModal] = useState({
    visible: false,
    edit: false,
  });
  const router = useRouter();
  const storeId = router.query.id;
  const [toko, setToko] = useState<Store>();
  const [produk, setProduk] = useState<Product[]>([]);
  const [selectedProduk, setSelectedProduk] = useState<number>();
  const [kategori, setKategori] = useState<Category[]>([]);
  const [search, setSearch] = useState<string>("");
  const [filter, setFilter] = useState("");
  const [state, dispatch] = useReducer(ProductReducer, {
    isSubmitted: false,
    sending: false,
    inputs: {
      categoryName: "",
      name: "",
      description: "",
      unit: "",
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

  const resetInput = () => {
    dispatch({
      name: "SET_INPUTS",
      payload: {
        categoryName: "",
        name: "",
        description: "",
        unit: "",
        groceryPrice: 0,
        price: 0,
      },
    });
    setModal({ ...modal, visible: false, edit: false });
  };

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
      })
      .catch((err) => {
        console.log(err);
      });
    GetAllCategories()
      .then((res) => {
        setKategori(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [router.isReady]);

  const handleDelete = async (e: SyntheticEvent, id: number) => {
    const selected = produk.find((item) => item.id === id);
    if (!selected) return;
    setProduk(produk.filter((v, i) => i !== produk.indexOf(selected)));
    destroyProduct(id, storeId);
  };

  const handleEdit = (e: SyntheticEvent, id: number) => {
    setModal({ ...modal, visible: true, edit: true });
    setSelectedProduk(id);

    const item = produk.find((p) => {
      return p.id === id;
    });
    if (!item) return;

    dispatch({
      name: "SET_INPUTS",
      payload: {
        name: item.name,
        categoryName: item.category.name,
        description: item.description,
        groceryPrice: item.groceryPrice,
        price: item.price,
        unit: item.unit,
      },
    });
  };
  const handleUpdateProduct = (e: FormEvent) => {
    e.preventDefault();
    if (
      !name &&
      !description &&
      !unit &&
      !groceryPrice &&
      !price &&
      !categoryName
    )
      return;

    updateProduct(selectedProduk, storeId, inputs)
      .then((resp) => {
        dispatch({ name: "SET_SENDING", payload: true });
        setProduk((prev) => {
          const newProduks = [...prev];
          const produk = newProduks.find(
            (produk) => produk.id === selectedProduk
          );
          if (!produk) return prev;
          produk.name = inputs.name;
          produk.category.name = inputs.categoryName;
          produk.description = inputs.description;
          produk.groceryPrice = inputs.groceryPrice;
          produk.price = inputs.price;
          produk.unit = inputs.unit;
          return newProduks;
        });
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
      .finally(() => {
        dispatch({ name: "SET_SENDING", payload: false });
      });
  };

  const hanldeSearch = (e: SyntheticEvent) => {
    setSearch((e.target as HTMLInputElement).value);
  };

  const indexedProduk: Product[] = useMemo(() => {
    return produk.filter((val) =>
      val.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [produk, search]);

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
      .finally(() => {
        dispatch({ name: "SET_SENDING", payload: false });
      });
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
        <div className="flex-row-center gap-10">
          <Button
            text="Edit"
            size="btnSmall"
            color="btnPrimary"
            onClick={(e) => handleEdit(e, value.id)}
          />
          <Button
            text="Hapus"
            size="btnSmall"
            color="btnDanger"
            onClick={(e) => handleDelete(e, value.id)}
          />
        </div>
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
            onClick={() => setModal({ ...modal, visible: true })}
          />
        </div>
        {produk[0] ? (
          <div className="x-auto">
            <Table columns={productColumn} data={indexedProduk} />
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
        visible={modal.visible}
        edit={modal.edit}
        onOK={() => null}
        onCancel={() => {
          setModal({ ...modal, visible: !modal.visible }), resetInput();
        }}
        footer={<></>}
      >
        {error.message} {modal.edit}
        <form
          onSubmit={
            modal.edit
              ? (e) => handleUpdateProduct(e)
              : (e) => handleAddProduct(e)
          }
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
              value={name}
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
              value={categoryName}
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
              value={description}
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
              value={groceryPrice}
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
              value={price}
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
          <div>
            <Select
              k="unit"
              data={[{ unit: "Lusin" }, { unit: "Pcs" }]}
              name="unit"
              label="Satuan"
              onChange={(e) =>
                dispatch({
                  name: "SET_INPUTS",
                  payload: {
                    unit: (e.target as HTMLSelectElement).value,
                  },
                })
              }
            />
            <ErrorMsg
              isSubmitted={isSubmitted}
              value={unit}
              // isEmpty={!unit}
              name="Satuan"
            />
          </div>
          <Button
            type="submit"
            text={sending ? "...Loading" : "Simpan Produk"}
            size="btnBig"
            color="btnPrimary"
          />
        </form>
      </ModalEmpty>
    </Toko>
  );
};

export default Produk;
