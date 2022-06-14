import React, { useState } from "react";
import {
  Button,
  Dashboard,
  Modal,
  ModalEmpty,
  PlanCard,
} from "../../components";
import useModal from "../../hooks/useModal";

type Props = {};

const Test: React.FC<Props> = (props) => {
  const { open, toggler } = useModal();
  const [plan, setPlan] = useState({});
  const [total, setTotal] = useState(1);

  const [step, setStep] = useState(1);
  const prevStep = () => step > 1 && setStep(step - 1);
  const nextStep = () => setStep(step + 1);
  const selected = (data: object) => {
    nextStep();
    setPlan(data);
  };
  const data = { price: 27000, name: "Monthly" };

  const payment = () => {
    switch (step) {
      case 1:
        return (
          <ModalEmpty
            visible={showModal}
            title="Modal"
            onOK={() => deleteSembarang()}
            onCancel={() => setShowModal(false)}
            footer={
              <>
                <div className="modalPlanText">
                  <p>Perlu konsultasi? Hubungi kami di </p>
                  <a
                    className="link"
                    target="_blank"
                    href=" https://wa.me/081225846909?text=Saya%20ingin%20melakukan%20konsultasi%20dengan%20anda%20terkait%20plan%20pada%20web%20inposery."
                  >
                    WA 081225846909
                  </a>
                </div>
              </>
            }
          >
            <div className="modalPlan">
              <PlanCard onClick={() => selected(data)} />
              <PlanCard onClick={() => selected(data)} recomend={true} />
              <PlanCard onClick={() => selected(data)} />
            </div>
          </ModalEmpty>
        );
      case 2:
        return (
          <ModalEmpty
            visible={showModal}
            title="Informasi Pembayaran"
            onOK={() => deleteSembarang()}
            onCancel={() => setShowModal(false)}
            // onBack={prevStep}
            footer={
              <>
                <Button
                  color="btnPrimary"
                  size="btnBig"
                  text="Buat Pesanan"
                  onClick={nextStep}
                />
              </>
            }
          >
            <div className="modalPembayaran">
              <div className="box rounded  bg-gray">
                <h4>Detail Pemesanan</h4>
                <table>
                  <thead>
                    <th>Item</th>
                    <th>Jumlah Item</th>
                    <th>Harga</th>
                  </thead>
                  <tbody>
                    <td>Lorem, ipsum.</td>
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
                      <select name="" id="">
                        <option value="">1</option>
                        <option value="">3</option>
                        <option value="">5</option>
                      </select>
                    </td>
                    <td>{data.price * total}</td>
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
            visible={showModal}
            // okText={deleting ? "Deleting..." : "Delete"}
            title="Konfirmasi Pembayaran"
            onOK={() => deleteSembarang()}
            onCancel={() => setShowModal(false)}
            footer={
              <>
                <Button
                  color="btnPrimary"
                  size="btnBig"
                  text="Konfirmasi Pesanan"
                  onClick={nextStep}
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
                <b>Note</b> silahkan melakukan pembayaran dengan melakukan{" "}
                <br />
                transfer ke nomor rekening yang tertera. Setelah itu kirimkan{" "}
                <br />
                bukti pembayaran pada admin dengan mengclick tombol konfirmasi{" "}
                <br />
                pembayaran.
              </div>
            </div>
          </ModalEmpty>
        );

      default:
        "asd";
    }
  };

  const [showModal, setShowModal] = useState<boolean>(true);
  const [deleting, setDeleting] = useState<boolean>(false);
  const deleteSembarang = () => {
    setDeleting(true);
    try {
      setTimeout(() => {
        setDeleting(false);
        setShowModal(false);
      }, 5000);
    } catch (error) {
      setDeleting(false);
    }
  };

  return (
    <Dashboard>
      <button onClick={() => setShowModal(true)}>Buka</button>
      {payment()}
    </Dashboard>
  );
};

export default Test;
