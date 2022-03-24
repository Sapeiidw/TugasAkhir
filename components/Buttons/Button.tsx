import Image from 'next/image'
import React from 'react'
import style from '../../styles/Button.module.css'

type Props = {
  type: string,
  text: string,
  icon?: string,
  className?: string,
}

const Button: React.FC<Props> = (props) => {
  if (props.type == 'btn-primary') {
    return <button className={`${style.btn} ${style.btnPrimary}`} >{props.text}</button>
  } else if (props.type == 'btn-inverse') {
    return <button className={`${style.btn} ${style.btnInverse}`} >
      <Image src="/icons/google.svg" alt="google" layout="fixed" width="24px" height="24px" className={style.icon} />
      {props.text}
    </button>
  } else {
    return <button className={`${style.btn} ${props.className}`} >{props.text}</button>
  }
}

export default Button