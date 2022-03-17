import React, { useState } from 'react'

type Props = {
  question: string,
  answer?: string,
}

const Dropdown: React.FC<Props> = (props) => {
    const [open, setOpen] = useState(false)

    const toggleDropdown = () => setOpen(!open)
  return (
    <>
        <li className='faq-li' onFocus={()=>toggleDropdown()} onBlur={()=>toggleDropdown()} tabIndex={0}>
          <div className="faq-question">{props.question}
            <div className={open ? "faq-icon-active" : "faq-icon"}>
              <span></span>
              <span></span>
            </div>
          </div>
          {
            open && (
              <div className="faq-answer">{props.answer}</div>
            )
          }
      </li>
    </>
  )
}

export default Dropdown