import Link from "next/link";
import React, { FormEvent, useEffect, useState } from "react";
import {
  Button,
  Modal,
  Dashboard,
  Input,
  StoreCard,
  PlanCard,
  ModalEmpty,
} from "../../components";
import useModal from "../../hooks/useModal";
import { stores } from "../../services/store.service";
import style from "../../styles/Dashboard.module.css";

type Props = {
  // toko?: any;
};

const Index: React.FC<Props> = (props) => {
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
  // console.log(props.toko);
  // const toko = 7;
  const [toko, setToko] = useState([]);
  const [error, setError] = useState();
  const bayar = true;
  const { open, toggler } = useModal();
  const hanldeSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault;
    return null;
  };

  const [showModal, setShowModal] = useState<boolean>(false);
  const [deleting, setDeleting] = useState<boolean>(false);
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
          size="big"
        />
      </header>

      {toko ? (
        <div className={style.mainContent}>
          {toko.map((key) => (
            <Link href={`toko/${key.id}`}>
              <a>
                <StoreCard key={key.id} name={key.name} address={key.address} />
              </a>
            </Link>
          ))}
          {/* <StoreCard />
          <StoreCard />
          <StoreCard /> */}
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
              label="No Telpon Toko"
              onChange={() => null}
            />
            <Input
              name="alamat"
              placeholder="Alamat Toko Anda"
              type="text"
              label="Alamat Toko"
              onChange={() => null}
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

// export const getStaticProps = async () => {
//   const toko = await stores().then((res) => res.data);
//   return {
//     props: {
//       toko,
//     },
//   };
// };
export default Index;
