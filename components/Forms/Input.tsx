import React, { SyntheticEvent } from 'react'
import useForm from '../../hooks/useForm'
import style from '../../styles/Auth.module.css'

type Props = {
  type: string,
  name: string,
  label?: string,
  placeholder: string,
  className?: string,
  onChange: (e: SyntheticEvent)=>void
}

const Input: React.FC<Props> = (props) => {
  return (
    <>
      <div className={style.formGroup}>
        { props.label && <label htmlFor={props.name}>{props.label}</label>}
        <input type={props.type} name={props.name} placeholder={props.placeholder} onChange={props.onChange} />
      </div>
    </>
  )
}

export default Input