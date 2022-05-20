import React from "react";
import { Button, Dashboard, Input } from "../../components";
import style from "../../styles/Dashboard.module.css";

type Props = {};

const RiwayatTransaksi = () => {
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
          <th>Kolom</th>
          <th>Kolom</th>
          <th>Kolom</th>
          <th>Kolom</th>
          <th>kolom</th>
        </thead>
        <tbody>
          <tr>
            <td>kolom</td>
            <td>kolom</td>
            <td>kolom</td>
            <td>kolom</td>
            <td>
              <Button text="Konfirmasi" color="btnPrimary" size="btnBig" />
              <Button text="Batal" color="btnInverse" size="btnSmall" />
            </td>
          </tr>
        </tbody>
      </table>
    </Dashboard>
  );
};

export default RiwayatTransaksi;
