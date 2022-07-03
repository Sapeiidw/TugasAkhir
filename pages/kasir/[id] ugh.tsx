import { useRouter } from "next/router";
import {
  FormEvent,
  SyntheticEvent,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
} from "react";
import { Button, ButtonLink, Input, ModalEmpty, Pos } from "../../components";
import ProductCard from "../../components/Cards/ProductCard";
import { GetAllInventory } from "../../services/inventory.service";
import { Category, Inventory } from "../../types";
import style from "../../styles/Kasir.module.css";
import OrderProductCard from "../../components/Cards/OrderProductCard";
import { GetAllCategories } from "../../services/category.service";
import {
  AddItem2Order,
  CreateOrder,
  DeleteOrder,
  DelItemInOrder,
  GetAllOrders,
  GetOrderIdItems,
} from "../../services/pos.service";
import { Item, OrderIdItems } from "../../types/interfaces/Pos/Order";

type Props = {};

const KasirTokoId: React.FC<Props> = (props) => {
  const router = useRouter();
  const storeId = router.query.id;
  const [inventories, setInventories] = useState<Inventory[]>([]);
  const [selectedItemId, setSelectedItemId] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
  const [orders, setOrders] = useState<any[]>([]);
  const [orderIdItems, setOrderIdItems] = useState<Item[]>([]);
  const [bayar, setBayar] = useState(false);
  const [orderId, setOrderId] = useState<number>(0);
  const [modal, setModal] = useState<boolean>(false);

  const indexedInventories: Inventory[] = useMemo(() => {
    return inventories.filter((val) =>
      val.product.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [inventories, search]);

  const order: Inventory[] = useMemo(
    () => inventories.filter((item) => selectedItemId.includes(item.id)),
    [selectedItemId]
  );

  const hanldeSearch = (e: SyntheticEvent) => {
    setSearch((e.target as HTMLInputElement).value);
  };
  const handleDelete = async (e: SyntheticEvent, id: number) => {
    // const selected = selectedItemId.find((item) => item === id);
    // if (!selected) return;
    // return setSelectedItemId(selectedItemId.filter((v, i) => v !== selected));
    setOrderIdItems(orderIdItems.filter((v, i) => v.id !== id));
  };

  const handleCreateOrder = (e: FormEvent) => {
    e.preventDefault();
    CreateOrder(storeId, { customerName: customerName })
      .then((res) => {
        setOrders([...orders, res.data.data]);
        setOrderId(res.data.data.id);
        setModal(!open);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleAddItem2Order = (orderId: number, items: any) => {
    AddItem2Order(orderId, items)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (!router.isReady) return;
    GetAllInventory(storeId)
      .then((res) => {
        setInventories(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
    GetAllCategories()
      .then((res) => {
        setCategories(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
    GetAllOrders(storeId)
      .then((res) => {
        setOrders(res.data.data);
        console.log(res.data.data, "getAllOrders");
      })
      .catch((err) => {
        console.log(err);
      });
  }, [router.isReady]);

  useEffect(() => {
    if (orderId === 0) return;
    GetOrderIdItems(orderId)
      .then((res) => {
        setOrderIdItems(res.data.data.items);
      })
      .catch((err) => {});
  }, [orderId]);

  console.log(orderIdItems, "orderIdItems");

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
              {categories.map((item, index) => (
                <div className="flex-row-center gap-10" key={index}>
                  <input
                    type="checkbox"
                    name="category"
                    id={item.name}
                    value={item.name}
                    onChange={(e) => {
                      setSelectedCategory((prev) => {
                        const newSelected = prev.includes(item.name)
                          ? prev.filter((v) => v !== item.name)
                          : [...prev, item.name];
                        return newSelected;
                      });
                    }}
                  />
                  <label htmlFor={`${item.name}`}>{item.name}</label>
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
              onChange={(e) => hanldeSearch(e)}
            />
            <Button
              text="Cari"
              type="submit"
              size="btnMedium"
              color="btnPrimary"
            />
          </form>
          <div className={style.produk}>
            {indexedInventories.map((item, index) => (
              <ProductCard
                data={item}
                key={item.id}
                // onClick={() => setSelectedItemId([...selectedItemId, item.id])}
                onClick={() =>
                  handleAddItem2Order(orderId, {
                    inventoryId: item.id,
                    quantity: 1,
                  })
                }
              />
            ))}
          </div>
        </div>
        <div className={style.orderContainer}>
          <div className="flex-row-center justify-between">
            <div className={style.title}>Pesanan Terbaru</div>
            <Button
              color="btnPrimary"
              size="btnSmall"
              text="+ Order"
              onClick={() => setModal(!modal)}
            />
          </div>
          <div className="flex-row-center gap-10 x-auto">
            {orders.map((item, index) => (
              <Button
                key={item.id}
                close={item.id}
                onClose={() => {
                  setOrders(orders.filter((v, i) => i !== index));
                  setOrderId(0);
                  DeleteOrder(item.id).then((res) => {
                    console.log(res);
                  });
                }}
                text={item.customerName}
                size="btnSmall"
                color={orderId == item.id ? "btnPrimary" : "btnInverse"}
                onClick={() => setOrderId(item.id)}
              />
            ))}
          </div>
          {orderId}
          <div className={style.items}>
            {orderIdItems &&
              orderIdItems?.map((item, index) => (
                <OrderProductCard
                  bayar={bayar}
                  data={item}
                  key={index}
                  orderID={orderId}
                  onClick={(e) => handleDelete(e, item.id)}
                />
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
              onClick={() => setBayar(true)}
            />
          </div>
        </div>
      </div>
      <ModalEmpty
        title="Create Customer"
        onOK={() => null}
        onCancel={() => setModal(!modal)}
        visible={modal}
      >
        <form
          onSubmit={(e) => handleCreateOrder(e)}
          className="flex flex-column gap-10"
        >
          <div>
            <Input
              type="text"
              placeholder="Nama customer"
              name="customerName"
              onChange={(e) =>
                setCustomerName((e.target as HTMLInputElement).value)
              }
              label="Customer Name"
            />
          </div>
          <Button
            text="Tambah Customer"
            color="btnPrimary"
            size="btnBig"
            type="submit"
          />
        </form>
      </ModalEmpty>
    </Pos>
  );
};

export default KasirTokoId;
