import React from 'react'
import style from '../../styles/Auth.module.css'

type Props = {
  type: string,
  name: string,
  label: string,
  placeholder: string,
  className?: string,
}

const Input: React.FC<Props> = (props) => {
  return (
    <>
      <div className={style.formGroup}>
        <label htmlFor={props.name}>{props.label}</label>
        <input type={props.type} name={props.name} placeholder={props.placeholder} />
      </div>
    </>
  )
}

export default Input