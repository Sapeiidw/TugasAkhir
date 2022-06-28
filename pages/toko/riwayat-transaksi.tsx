import React, { useState } from "react";
import { Button, Dashboard, Input, ModalEmpty } from "../../components";
import style from "../../styles/Dashboard.module.css";

type Props = {};

const RiwayatTransaksi: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const data = { price: 27000, name: "Monthly" };
  const total = 2;
  return (
    <Dashboard>
      <div className={style.header}>
        <div className="text">
          <h1>Transaksi</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
            mollitia?
          </p>
        </div>
        <form className={style.headerSearch}>
          {/* <img src="/icons/search.svg" alt="" /> */}
          <Input
            name="search"
            onChange={() => null}
            type="text"
            placeholder="Search your store ..."
          />
        </form>
      </div>

      <table>
        <thead>
          <th>Tgl Pemesanan</th>
          <th>No Pesanan</th>
          <th>Plan</th>
          <th>Harga</th>
          <th>Quantity</th>
          <th>Jumlah yang harus dibayar</th>
          <th>Status</th>
          <th>Aksi</th>
        </thead>
        <tbody>
          <tr>
            <td>27 April 2022</td>
            <td>12RXKING76</td>
            <td>Monthly</td>
            <td>Rp. 27.000</td>
            <td>{total}</td>
            <td>Rp. 54.000</td>
            <th>
              <div className="text-danger">Pending</div>
            </th>
            <td>
              <div className="flex-row-center gap-20">
                <Button
                  onClick={() => setShowModal(true)}
                  text="Cara Bayar"
                  color="btnPrimary"
                  size="btnSmall"
                />
                <Button text="Batal" color="btnInverse" size="btnSmall" />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <ModalEmpty
        visible={showModal}
        // okText={deleting ? "Deleting..." : "Delete"}
        title="Konfirmasi Pembayaran"
        onOK={() => null}
        onCancel={() => setShowModal(false)}
        footer={
          <>
            <Button
              color="btnPrimary"
              size="btnBig"
              text="Konfirmasi Pesanan"
              onClick={() => null}
            />
          </>
        }
      >
        <div className="modalKonfirmasiPembayaran">
          {/* <button onClick={prevStep}>back</button> */}
          <div className="circle bg-success">
            <img src="/icons/centang.svg" alt="" />
          </div>
          <h3>Pesanan 12RXKing telah diproses</h3>
          <p>Total Pembayaran yang harus dibayar</p>
          <div className="box rounded bg-gray">
            <h1>Rp.{data.price * total}</h1>
          </div>
          <h4>Metode Pembayaran</h4>
          <p>BRI Virtual Account</p>
          <h1>12731982749156924</h1>
          <div className="box bg-gray rounded text-justify">
            <b>Note</b> silahkan melakukan pembayaran dengan melakukan <br />
            transfer ke nomor rekening yang tertera. Setelah itu kirimkan <br />
            bukti pembayaran pada admin dengan mengclick tombol konfirmasi{" "}
            <br />
            pembayaran.
          </div>
        </div>
      </ModalEmpty>
    </Dashboard>
  );
};

export default RiwayatTransaksi;
