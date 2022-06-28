import Link from "next/link";
import { Router, useRouter } from "next/router";
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
import { InventoryReducer } from "../../../reducer";
import { categories } from "../../../services/category.service";
import {
  AddInventory,
  GetAllInventory,
} from "../../../services/inventory.service";
import {
  addProduct,
  destroyProduct,
  products,
  updateProduct,
} from "../../../services/product.service";
import { store } from "../../../services/store.service";

import style from "../../../styles/Inventory.module.css";
import {
  Category,
  Inventory,
  Product,
  Store,
  TableColumn,
} from "../../../types";

type Props = {};

const Inventory: React.FC<Props> = (props) => {
  const [modal, setModal] = useState({
    visible: false,
    edit: false,
    // key: 0,
    // index: 0,
  });
  const router = useRouter();
  const storeId = router.query.id;
  const [toko, setToko] = useState<Store>();
  const [inventory, setInventory] = useState<Inventory[]>([]);
  const [produk, setProduk] = useState<Product[]>([]);
  const [selectedInventory, setSelectedInventory] = useState<number>();
  const [kategori, setKategori] = useState<Category[]>([]);
  const [search, setSearch] = useState<string>("");
  const [filter, setFilter] = useState("");
  const [state, dispatch] = useReducer(InventoryReducer, {
    isSubmitted: false,
    sending: false,
    inputs: {
      productId: 0,
      stock: 0,
      description: "",
    },
    error: {
      statusCode: 0,
      message: "",
    },
  });
  const { isSubmitted, inputs, sending, error } = state;
  const { stock, description } = inputs;

  const resetInput = () => {
    dispatch({
      name: "SET_INPUTS",
      payload: {
        productId: 0,
        stock: 0,
        description: "",
      },
    });
    setModal({ ...modal, visible: false, edit: false });
  };

  const handleDelete = async (e: SyntheticEvent, id: number, index: number) => {
    setInventory(inventory.filter((v, i) => i !== index));
    destroyProduct(id, storeId);
  };

  const handleEdit = (e: SyntheticEvent, id: number, index: number) => {
    setModal({ ...modal, visible: true, edit: true });
    setSelectedInventory(id);

    const item = inventory.find((p) => {
      return p.id === id;
    });
    if (!item) return;

    dispatch({
      name: "SET_INPUTS",
      payload: {
        stock: item.stock,
        description: item.description,
      },
    });
  };

  // const handleUpdateProduct = (e: FormEvent) => {
  //   e.preventDefault();
  //   if (
  //     !stock &&
  //     !description &&
  //   )
  //     return;

  //   updateProduct(selectedInventory, storeId, inputs)
  //     .then((resp) => {
  //       dispatch({ name: "SET_SENDING", payload: true });
  //       setInventory((prev) => {
  //         const newInventorys = [...prev];
  //         const inventory = newInventorys.find(
  //           (inventory) => inventory.id === selectedInventory
  //         );
  //         if (!inventory) return;
  //         inventory.stock = inputs.stock;
  //         inventory.description = inputs.description;
  //         return newInventorys;
  //       });
  //     })
  //     .catch((error) => {
  //       dispatch({
  //         name: "SET_ERROR",
  //         payload: {
  //           statusCode: error.response.data.statusCode,
  //           message: error.response.data.message,
  //         },
  //       });
  //     })
  //     .finally(() => {
  //       dispatch({ name: "SET_SENDING", payload: false });
  //     });
  // };

  const hanldeSearch = (e: SyntheticEvent) => {
    setSearch((e.target as HTMLInputElement).value);
  };

  const indexedInventory: Inventory[] = useMemo(() => {
    return inventory.filter((val) =>
      val.product.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [inventory, search]);

  const handleAddInventory = (e: FormEvent) => {
    e.preventDefault();
    dispatch({ name: "SET_IS_SUBMITTED" });

    if (!stock && !description)
      dispatch({
        name: "SET_ERROR",
        payload: {
          isValid: true,
        },
      });

    if (error.isValid) return;

    AddInventory(inputs.productId, storeId, { stock, description })
      .then((resp) => {
        dispatch({ name: "SET_SENDING", payload: true });
        GetAllInventory(storeId)
          .then((res) => {
            setInventory(res.data.data);
          })
          .catch((err) => {
            console.log(err);
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

  const inventoryColumn: TableColumn<Inventory>[] = [
    {
      key: "id",
      title: "NO",
      dataType: "numbering",
    },
    {
      key: "name",
      title: "Nama Produk",
      render: (data) => `${data.product.name}`,
    },
    {
      key: "name",
      title: "Category",
      render: (data) => `${data.product.category.name}`,
    },
    {
      key: "stock",
      title: "Stock",
    },
    {
      key: "description",
      title: "Description",
    },
  ];

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
    GetAllInventory(storeId)
      .then((res) => {
        setInventory(res.data.data);
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
            placeholder="Cari inventory..."
            onChange={(e) => hanldeSearch(e)}
          />
          <Button
            // icon="/icons/Plus.svg"
            text="Tambah Inventory"
            size="btnSmall"
            color="btnPrimary"
            onClick={() => setModal({ ...modal, visible: true })}
          />
        </div>
        {inventory[0] ? (
          <div className="x-auto">
            <Table columns={inventoryColumn} data={indexedInventory} />
          </div>
        ) : (
          <div className={style.emptyInventory}>
            <img src="/images/produkKosong.svg" alt="" />
            <h4 className="text-primary">Belum ada inventory</h4>
          </div>
        )}
      </div>
      <ModalEmpty
        title="Tambah Inventory"
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
            (e) => handleAddInventory(e)
            // modal.edit
            //   ? (e) => handleUpdateProduct(e)
            //   : (e) => handleAddInventory(e)
          }
          className="flex flex-column gap-10"
        >
          {state.error.message}
          <div>
            <Select
              data={produk}
              k="name"
              kValue="id"
              name="productId"
              onChange={(e) =>
                dispatch({
                  name: "SET_INPUTS",
                  payload: {
                    productId: (e.target as HTMLSelectElement).value,
                  },
                })
              }
              label="Produk"
            />
          </div>
          <div>
            <Input
              name="stock"
              onChange={(e) =>
                dispatch({
                  name: "SET_INPUTS",
                  payload: {
                    stock: (e.target as HTMLInputElement).valueAsNumber,
                  },
                })
              }
              value={stock}
              placeholder="Stock awal"
              type="number"
              label="Stock awal"
            />
            <ErrorMsg
              isSubmitted={isSubmitted}
              value={stock}
              isEmpty={!stock}
              name="Stock"
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
              placeholder="Deskripsi Inventory"
              type="text"
              label="Deskripsi Inventory"
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
            <Button
              type="submit"
              text={sending ? "...Loading" : "Simpan Inventory"}
              size="btnBig"
              color="btnPrimary"
            />
          </div>
        </form>
      </ModalEmpty>
    </Toko>
  );
};

export default Inventory;
