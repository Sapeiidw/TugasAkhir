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
import {
  categoryService,
  productService,
  storeService,
} from "../../../services";
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
  const [categories, setCategories] = useState<Category[]>([]);
  const [filter, setFilter] = useState("");
  const [state, dispatch] = useReducer(ProductReducer, {
    isSubmitted: false,
    sending: false,
    inputs: {
      name: "",
      description: "",
      unit: 0,
      groceryPrice: 0,
      price: 0,
      category: "",
    },
    error: {
      statusCode: 0,
      message: "",
    },
  });
  const { isSubmitted, inputs, sending } = state;
  const { name, description, unit, groceryPrice, price } = inputs;

  useEffect(() => {
    if (!router.isReady) return;
    storeService
      .store(storeId)
      .then((res) => {
        setToko(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
    productService
      .products(storeId)
      .then((res) => {
        setProduk(res.data.data);
        setProduks(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
    categoryService
      .categories()
      .then((res) => {
        setCategories(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [router.isReady]);

  const handleDelete = async (e: SyntheticEvent, id: any, index: number) => {
    setProduks(produk.filter((v, i) => i !== index));
    setProduk(produk.filter((v, i) => i !== index));
    productService.destroyProduct(id);
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

  const addProduct = () => {
    dispatch({ name: "SET_IS_SUBMITTED" });

    if (!name && !description && !unit && !groceryPrice && !price) return;

    productService
      .addProduct(storeId, inputs)
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

  const handleAddProduct = (e: FormEvent) => {
    e.preventDefault();
    addProduct();
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
        <div className="x-auto">
          <Table columns={productColumn} data={produk} />
          <ModalEmpty
            title="Tambah Produk"
            visible={modal}
            onOK={() => null}
            onCancel={() => setModal(!modal)}
            footer={<></>}
          >
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
                  data={categories}
                  k="name"
                  label="Kategori"
                  name="category"
                  onChange={(e) =>
                    dispatch({
                      name: "SET_INPUTS",
                      payload: {
                        category: (e.target as HTMLSelectElement).value,
                      },
                    })
                  }
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
                        groceryPrice: (e.target as HTMLInputElement)
                          .valueAsNumber,
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
