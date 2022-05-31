import Link from "next/link";
import React, { FormEvent, useState } from "react";
import {
  Button,
  Modal,
  Dashboard,
  Input,
  StoreCard,
  PlanCard,
} from "../../components";
import useModal from "../../hooks/useModal";
import style from "../../styles/Dashboard.module.css";

type Props = {};

const Index: React.FC<Props> = (props) => {
  const toko = 1;
  const bayar = true;
  const { open, toggler } = useModal();
  const hanldeSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault;
    return null;
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
          onClick={() => toggler()}
          size="big"
        />
      </header>
      {toko ? (
        <div className={style.mainContent}>
          <StoreCard />
          <StoreCard />
          <StoreCard />
          <StoreCard />
        </div>
      ) : (
        <div className={style.emptyStore}>
          <img src="/images/ilustration4.svg" alt="" />
          <h2>Kamu belum memiliki toko.</h2>
        </div>
      )}
      {/* <Modal open={open} hide={toggler}>
        {bayar ? (
          <form className="tokoForm" onSubmit={hanldeSubmit}>
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
              onChange={() => null}
            />
            <Input
              name="notelp"
              placeholder="No Telp Toko Anda"
              type="text"
              label="Nama Telpon Toko"
              onChange={() => null}
            />
            <Input
              name="alamat"
              placeholder="Alamat Toko Anda"
              type="text"
              label="Alamat Toko"
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
      </Modal> */}
    </Dashboard>
  );
};

export default Index;
