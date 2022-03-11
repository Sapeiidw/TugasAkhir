import React from 'react'
import { IButton } from '../../interfaces'
import style from '../../styles/Buttons.module.css'

function ButtonPrimary({className,onClick,text}: IButton) {
  return (
    <>
        <button className={`${style.primary} ${className}`} onClick={onClick}>{text}</button>
    </>
  )
}

export default ButtonPrimary