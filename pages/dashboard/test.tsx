import React, { useState } from "react";

type Props = {};

const test = (props: Props) => {
  const [step, setStep] = useState(1);
  const prevStep = () => step !== 0 && setStep(step - 1);
  const nextStep = () => setStep(step + 1);

  switch (step) {
    case 1:
      return (
        <>
          <h1>step 1</h1>
          <button onClick={nextStep}>Next</button>
        </>
      );
    case 2:
      return (
        <>
          <h1>step 2</h1>
          <button onClick={prevStep}>Prev</button>
        </>
      );
    default:
      break;
  }
};

export default test;
