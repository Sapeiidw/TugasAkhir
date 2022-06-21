import Link from "next/link";
import Router from "next/router";
import React, { FormEvent, useEffect, useReducer, useState } from "react";
import {
  Button,
  Modal,
  Dashboard,
  Input,
  StoreCard,
  PlanCard,
  ModalEmpty,
} from "../../components";
import ErrorMsg from "../../components/Forms/ErrorMsg";
import useModal from "../../hooks/useModal";
import { StoreReducer } from "../../reducer";
import { stores, storesCreate } from "../../services/store.service";
import style from "../../styles/Dashboard.module.css";
import { Store } from "../../types";

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
        console.log(resp);
        Router.reload();
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
  const bayar = true;
  console.log(error);
  const hanldeSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    store();
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log("we are running on the client");
      console.log(localStorage.getItem("TOKEN"));
      stores()
        .then((res) => {
          setToko(res.data.data);
          console.log(toko);
        })
        .catch((err) => {
          setError(err);
          console.log(err.message);
        });
    } else {
      console.log("we are running on the server");
    }
  }, []);

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
          onClick={() => setShowModal(true)}
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
        {bayar ? (
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
              <Button color="btnInverse" text="Batal" size="btnBig" />
            </div>
          </form>
        ) : (
          <>
            <h1 className="modalHeader">Upgrade plan</h1>
            <div className="modalPlan">
              <PlanCard />
              <PlanCard recomend={true} />
              <PlanCard />
            </div>
            <p>Perlu konsultasi ? Hubungi admin kami</p>
            <Link href="">
              <a>Admin</a>
            </Link>
          </>
        )}
      </ModalEmpty>
    </Dashboard>
  );
};

export default Index;
