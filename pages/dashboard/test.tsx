import { stringify } from "querystring";
import React, { useState } from "react";
import { Button, Dashboard, Modal, PlanCard } from "../../components";
import useModal from "../../hooks/useModal";

type Props = {};

const test: React.FC<Props> = (props) => {
  const { open, toggler } = useModal();
  const [plan, setPlan] = useState({})
  const [total, setTotal] = useState(1)

  const [step, setStep] = useState(1);
  const prevStep = () => step !== 0 && setStep(step - 1);
  const nextStep = () => setStep(step + 1);
  const selected = (data: object) => {
    nextStep()
    setPlan(data)
  }
  const data = { price: 27000, name: "Monthly" }

  const payment = () => {
    switch (step) {
      case 1:
        return (
          <>
            <div className="modalPlan">
              <PlanCard onClick={() => selected(data)} />
              <PlanCard onClick={() => selected(data)} recomend={true} />
              <PlanCard onClick={() => selected(data)} />
            </div>
            <Button type="btnPrimary" onClick={nextStep} text="next" />
          </>
        );
      case 2:
        return (
          <>
          <button onClick={prevStep}>back</button>
            <h1>Informasi Pembayaran</h1>

            <h3>Detail Pemesanan</h3>
            <table>
              <thead>
                <th>Plan</th>
                <th>Jumlah</th>
                <th>Harga</th>
              </thead>
              <tbody>
                <td>Lorem, ipsum.</td>
                <td className="flex-row-center">
                  <Button onClick={e => total > 0 && setTotal(total - 1)} text="-" type="btnPrimary" />
                  <span>{total}</span>
                  <Button onClick={e => setTotal(total + 1)} text="+" type="btnPrimary" />
                </td>
                <td>{data.price * total}</td>
              </tbody>
            </table>
            <label htmlFor="pembayaran">Metode Pembayaran</label>
            <select name="pembayaran" id="">
              <option value="BRI">BRI</option>
              <option value="otomatis">otomatis</option>
            </select>
            <Button onClick={nextStep} text="Prev" type="btnPrimary" />
          </>
        );
      case 3:
        return (
          <>
          <button onClick={prevStep}>back</button>
            <h1>Informasi Pembayaran</h1>
            <div className="cricle"></div>
            <h3>Pesanan 0R0001 telah dibuat</h3>
            <p>Total Pembayaran yang harus dibayar</p>
            <h1>{data.price * total}</h1>
            <h2>Transfer Pembayaran</h2>
            <div className="circle"></div>
            <p>BRI Virtual Account</p>
            <h1>12731982749156924</h1>
            <Button onClick={()=>{}} text="Konfirmasi Pembayran" type="btnPrimary" />
          </>
        )

      default:
        "asd";
    }
  }

  return (
    <Dashboard>
      <button onClick={() => toggler()}>Buka</button>
      <Modal hide={toggler} open={open}>{payment()}</Modal>
    </Dashboard>
  )
};

export default test;
