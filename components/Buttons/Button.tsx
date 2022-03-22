import React from 'react'
import style from '../../styles/Button.module.css'

type Props = {
  type: string,
  text: string,
  className?: string,
}

const Button: React.FC<Props> = (props) => {
  
  if (props.type == 'btn-primary') {
    return <button className={`${style.btn} ${style.btnPrimary}`} >{props.text}</button>
  } else if (props.type == 'btn-inverse') {
    return <button className={`${style.btn} ${style.btnInverse}`} >{props.text}</button>
  } else {
    return <button className={`${style.btn} ${props.className}`} >{props.text}</button>
  }
}

export default Button