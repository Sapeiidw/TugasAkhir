import React, { useState } from "react";
import style from "../styles/LandingPage.module.css";

type Props = {
  question: string;
  answer?: string;
};

const Dropdown: React.FC<Props> = (props) => {
  const [open, setOpen] = useState(false);

  const toggleDropdown = () => setOpen(!open);

  return (
    <>
      <li className={style.faqLi} onClick={() => toggleDropdown()} tabIndex={0}>
        <div className={style.faqQuestion}>
          {props.question}
          <div className={open ? style.faqIconActive : style.faqIcon}>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className={`${style.faqAnswer} ${open && style.faqAnswerOpen}`}>
          {props.answer}
        </div>
      </li>
    </>
  );
};
// onFocus={() => toggleDropdown()} onBlur={() => toggleDropdown()}

export default Dropdown;
