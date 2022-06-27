import React, { useEffect, useState } from "react";
import {
  GetSubscribePlans,
  PostSubscribePlanId,
} from "../../services/subscribe.service";
import Button from "../Buttons/Button";
import ButtonLink from "../Buttons/ButtonLink";
import PlanCard from "../Cards/PlanCard";
import ModalEmpty from "./ModalEmpty";

type Props = {
  visible: boolean;
};

const PlanModal: React.FC<Props> = (props) => {
  const [step, setStep] = useState<number>(1);
  const [modal, setModal] = useState<boolean>(props.visible);
  const [selectedPlan, setSelectedPlan] = useState<any>({});
  const [plan, setPlan] = useState<any>([]);
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
            visible={props.visible}
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

  return <>{payment()}</>;
};

export default PlanModal;
