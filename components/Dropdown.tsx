import React, { useState } from 'react'
import style from "../styles/LandingPage.module.css";

type Props = {
  question: string,
  answer?: string,
}

const Dropdown: React.FC<Props> = (props) => {
  const [open, setOpen] = useState(false)

  const toggleDropdown = () => setOpen(!open)

  return (
    <>
      <li className={style.faqLi} onFocus={() => toggleDropdown()} onBlur={() => toggleDropdown()} tabIndex={0}>
        <div className={style.faqQuestion}>{props.question}
          <div className={open ? style.faqIconActive : style.faqIcon}>
            <span></span>
            <span></span>
          </div>
        </div>
        {open && <div className={style.faqAnswer}>{props.answer}</div>}
      </li>
    </>
  )
}

export default Dropdown