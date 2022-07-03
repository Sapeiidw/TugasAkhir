import { useRouter } from "next/router";
import { FormEvent, SyntheticEvent, useEffect, useMemo, useState } from "react";
import { Button, ButtonLink, Input, ModalEmpty, Pos } from "../../components";
import ProductCard from "../../components/Cards/ProductCard";
import { GetAllInventory } from "../../services/inventory.service";
import { Category, Inventory } from "../../types";
import style from "../../styles/Kasir.module.css";
import OrderProductCard from "../../components/Cards/OrderProductCard";
import { GetAllCategories } from "../../services/category.service";
import { CreateOrder, GetAllOrders } from "../../services/pos.service";

type Props = {};

const KasirTokoId: React.FC<Props> = (props) => {
  const router = useRouter();
  const storeId = router.query.id;
  const [inventories, setInventories] = useState<Inventory[]>([]);
  const [selectedItemId, setSelectedItemId] = useState<number[]>([]);
  const [search, setSearch] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
  const [orders, setOrders] = useState<any[]>([]);

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
    const selected = selectedItemId.find((item) => item === id);
    if (!selected) return;
    return setSelectedItemId(selectedItemId.filter((v, i) => v !== selected));
  };

  const handleCreateOrder = (e: FormEvent) => {
    e.preventDefault();
    CreateOrder(storeId, { customerName: customerName })
      .then((res) => {
        setOrderId(res.data.data.id);
        console.log(res.data.data);
        setModal(!open);
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
  console.log({ storeId, indexedInventories });
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
                onClick={() => setSelectedItemId([...selectedItemId, item.id])}
              />
            ))}
          </div>
          {selectedItemId}
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
          <div className="flex-row-center gap-10">
            {/* {orders.map((item, index) => (
              <Button
                key={index}
                text={item.customerName}
                size="btnSmall"
                color={orderId == item.id ? "btnPrimary" : "btnInverse"}
                onClick={() => setOrderId(item.id)}
              />
            ))} */}
          </div>
          <div className={style.items}>
            {orderId}
            {selectedItemId[0]
              ? order.map((item, index) => (
                  <OrderProductCard
                    bayar={bayar}
                    data={item}
                    key={item.id}
                    orderID={orderId}
                    onClick={(e) => handleDelete(e, item.id)}
                  />
                ))
              : "kosong"}
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
      {selectedCategory}
      <ModalEmpty
        title="Create Customer"
        onOK={() => null}
        onCancel={() => setModal(!modal)}
        visible={modal}
      >
        <form
          onSubmit={(e) => handleCreateOrder(e)}
          className="flex-col gap-10"
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
