import Link from "next/link";
import React, { FormEvent, useEffect, useReducer, useState } from "react";
import {
  Button,
  Modal,
  Dashboard,
  Input,
  StoreCard,
  PlanCard,
  ModalEmpty,
  ButtonLink,
} from "../../components";
import ErrorMsg from "../../components/Forms/ErrorMsg";
import useModal from "../../hooks/useModal";
import { StoreReducer } from "../../reducer";
import { decodeToken, getToken } from "../../services/storage.service";
import { stores, storesCreate } from "../../services/store.service";
import {
  GetSubscribePlans,
  PostSubscribePlanId,
} from "../../services/subscribe.service";
import style from "../../styles/Dashboard.module.css";
import { Store, SubscribePlan } from "../../types";

type Props = {};

const Index: React.FC<Props> = (props) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [state, dispatch] = useReducer(StoreReducer, {
    isSubmitted: false,
    sending: false,
    inputs: {
      name: "",
      phone: "",
      address: "",
    },
    error: {
      statusCode: 0,
      message: "",
    },
  });
  const { isSubmitted, inputs, sending } = state;
  const { name, phone, address } = inputs;
  const store = () => {
    dispatch({ name: "SET_IS_SUBMITTED" });

    if (!name && !phone && !address) return;

    storesCreate(inputs)
      .then((resp) => {
        dispatch({ name: "SET_SENDING", payload: true });
        // setToko();
        console.log(resp);
      })
      .catch((error) => {
        console.log("error", error);
        dispatch({
          name: "SET_ERROR",
          payload: {
            statusCode: error,
            message: error,
          },
        });
      })
      .finally(() => dispatch({ name: "SET_SENDING", payload: false }));
  };
  const [toko, setToko] = useState<Store[]>([]);
  const [error, setError] = useState();

  const hanldeSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    store();
  };

  useEffect(() => {
    stores()
      .then((res) => {
        setToko(res.data.data);
        console.log(toko);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);
  //
  const token = getToken();
  const user: any = token && decodeToken(token);
  console.log(user.role);
  // asdasd
  const [step, setStep] = useState<number>(1);
  const [modal, setModal] = useState<boolean>(false);
  const [selectedPlan, setSelectedPlan] = useState<any>({});
  const [plan, setPlan] = useState<SubscribePlan[]>([]);
  const [jumlahItem, setJumlahItem] = useState<number>(1);
  const nextStep = () => setStep(step + 1);
  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };
  const selected = (data: object) => {
    setSelectedPlan(data);
    nextStep();
  };

  useEffect(() => {
    GetSubscribePlans()
      .then((res) => {
        setPlan(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const reset = () => {
    setModal(!modal);
    setSelectedPlan({});
    setStep(1);
  };

  const buatPesanan = () => {
    PostSubscribePlanId(selectedPlan.id)
      .then((res) => {
        nextStep();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const payment = () => {
    switch (step) {
      case 1:
        return (
          <ModalEmpty
            visible={modal}
            title="Modal"
            onOK={() => null}
            onCancel={() => reset()}
            footer={
              <>
                <div className="modalPlanText">
                  <p>Perlu konsultasi? Hubungi kami di </p>
                  <a
                    className="link"
                    target="_blank"
                    rel="noreferrer"
                    href="https://wa.me/081225846909?text=Saya%20ingin%20melakukan%20konsultasi%20dengan%20anda%20terkait%20plan%20pada%20web%20inposery."
                  >
                    WA 081225846909
                  </a>
                </div>
              </>
            }
          >
            <div className="modalPlan">
              {plan.map((data: any, index: number) => {
                return (
                  <PlanCard
                    key={data.id}
                    recomend={index == 1 && true}
                    data={data}
                    onClick={() => selected(data)}
                  />
                );
              })}
            </div>
          </ModalEmpty>
        );
      case 2:
        return (
          <ModalEmpty
            visible={modal}
            title="Informasi Pembayaran"
            onOK={() => null}
            onCancel={() => reset()}
            // onBack={prevStep}
            footer={
              <>
                <Button
                  color="btnPrimary"
                  size="btnBig"
                  text="Buat Pesanan"
                  onClick={() => buatPesanan()}
                />
              </>
            }
          >
            <div className="modalPembayaran">
              <div className="box rounded  bg-gray">
                <h4>Detail Pemesanan</h4>
                <table>
                  <thead>
                    <tr>
                      <th>Item</th>
                      <th>Jumlah Item</th>
                      <th>Harga</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{selectedPlan.name}</td>
                      <td>
                        {/* <Button
                          onClick={(e) => total > 0 && setTotal(total - 1)}
                          text="-"
                          color="btnPrimary"
                          size="sd"
                        />
                        <span>{total}</span>
                        <Button
                          onClick={(e) => setTotal(total + 1)}
                          text="+"
                          color="btnPrimary"
                          size="sd"
                        /> */}
                        <select
                          name=""
                          id=""
                          onChange={(e) =>
                            setJumlahItem(parseInt(e.target.value))
                          }
                        >
                          <option value="1">1</option>
                          <option value="2">3</option>
                          <option value="3">5</option>
                        </select>
                      </td>
                      <td>{selectedPlan.price * jumlahItem}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="box rounded bg-gray">
                <label htmlFor="pembayaran">Metode Pembayaran</label>
                <select name="pembayaran" id="">
                  <option value="">Transfer</option>
                  <option value="">COD</option>
                </select>
              </div>
              <div className="box rounded bg-gray">
                <p>
                  Proses konfirmasi pembayaran akan membutuhkan waktu sekitar 20{" "}
                  <br />
                  menit jika menggunakan metode pembayaran manual. Mohon
                  menunggu <br />
                  dengan sabar dan terima kasih.
                </p>
              </div>
            </div>
          </ModalEmpty>
        );
      case 3:
        return (
          <ModalEmpty
            visible={modal}
            // okText={deleting ? "Deleting..." : "Delete"}
            title="Konfirmasi Pembayaran"
            onOK={() => null}
            onCancel={() => reset()}
            footer={
              <>
                <ButtonLink
                  color="btnPrimary"
                  size="btnBig"
                  text="Kirim Bukti Pembayaran"
                  target="_blank"
                  href="https://wa.me/081225846909?text=Saya%20ingin%20melakukan%20konsultasi%20dengan%20anda%20terkait%20plan%20pada%20web%20inposery."
                />
              </>
            }
          >
            <div className="modalKonfirmasiPembayaran">
              {/* <button onClick={prevStep}>back</button> */}
              <div className="circle bg-success">
                <img src="/icons/centang.svg" alt="" />
              </div>
              <h3>Pesanan Terhadap {selectedPlan.name} telah diproses</h3>
              <p>Total Pembayaran yang harus dibayar</p>
              <div className="box rounded bg-gray">
                <h1>Rp.{selectedPlan.price}</h1>
              </div>
              <h4>Metode Pembayaran</h4>
              <p>BRI Virtual Account</p>
              <h1>12731982749156924</h1>
              <div className="box bg-gray rounded text-justify">
                <b>Note :</b> silahkan melakukan pembayaran dengan melakukan{" "}
                <br />
                transfer ke nomor rekening yang tertera. Setelah itu kirimkan{" "}
                <br />
                bukti pembayaran pada admin dengan mengclick tombol dibawah{" "}
                <br />
                atau bisa dialkukan di menu riwayat transaksi. Terimakasih
              </div>
            </div>
          </ModalEmpty>
        );

      default:
        "asd";
    }
  };

  return (
    <Dashboard>
      <header className={style.header}>
        <h1 className={style.headerTitle}>Your Store</h1>
        <form className={style.headerSearch}>
          {/* <img src="/icons/search.svg" alt="" /> */}
          <Input
            name="search"
            onChange={() => null}
            type="text"
            placeholder="Search your store ..."
          />
        </form>
        <Button
          color="btnPrimary"
          text="+ Create New Store"
          onClick={
            user.role === "Owner"
              ? () => setShowModal(!showModal)
              : () => setModal(!modal)
          }
          size="btnMedium"
        />
      </header>

      {toko[0] != null ? (
        <div className={style.mainContent}>
          {toko.map((key) => (
            <StoreCard
              key={key.id}
              link={`toko/${key.id}`}
              id={key.id}
              name={key.name}
              address={key.address}
            />
          ))}
        </div>
      ) : (
        <div className={style.emptyStore}>
          <img src="/images/ilustration4.svg" alt="" />
          <h2>Kamu belum memiliki toko.</h2>
        </div>
      )}

      <ModalEmpty
        visible={showModal}
        title="Create Toko"
        onOK={() => null}
        onCancel={() => setShowModal(false)}
        footer={null}
        // onBack={() => null}
      >
        <form className="tokoForm" onSubmit={(e) => hanldeSubmit(e)}>
          <div className="formHeader">
            <h1>Buat toko anda</h1>
            <p>
              Buat tokomu dan undang karyawan untuk manajemen toko yang lebih
              baik
            </p>
          </div>
          <Input
            name="name"
            placeholder="Nama Toko Anda"
            type="text"
            label="Nama Toko"
            onChange={(event) =>
              dispatch({
                name: "SET_INPUTS",
                payload: {
                  name: (event.target as HTMLInputElement).value,
                },
              })
            }
          />
          <ErrorMsg
            isSubmitted={isSubmitted}
            value={name}
            isEmpty={!name}
            name="Name"
            min={4}
          />
          <Input
            name="phone"
            placeholder="No Telp Toko Anda"
            type="text"
            label="No Telpon Toko"
            onChange={(event) =>
              dispatch({
                name: "SET_INPUTS",
                payload: {
                  phone: (event.target as HTMLInputElement).value,
                },
              })
            }
          />
          <ErrorMsg
            isSubmitted={isSubmitted}
            value={phone}
            isEmpty={!phone}
            name="No telp"
            min={12}
          />
          <Input
            name="alamat"
            placeholder="Alamat Toko Anda"
            type="text"
            label="Alamat Toko"
            onChange={(event) =>
              dispatch({
                name: "SET_INPUTS",
                payload: {
                  address: (event.target as HTMLInputElement).value,
                },
              })
            }
          />
          <ErrorMsg
            isSubmitted={isSubmitted}
            value={address}
            isEmpty={!address}
            name="Address"
          />
          <Input
            name="photo"
            placeholder="Logo Toko Anda"
            type="file"
            label="Logo Toko"
            onChange={() => null}
          />

          <div className="formFooter">
            <Button color="btnPrimary" size="btnBig" text="Submit" />
            <Button
              color="btnInverse"
              size="btnBig"
              text="Batal"
              onClick={() => setShowModal(false)}
            />
          </div>
        </form>
      </ModalEmpty>

      {payment()}
    </Dashboard>
  );
};

export default Index;
