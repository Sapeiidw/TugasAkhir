import React from 'react'
import style from '../../styles/Cards.module.css'

type Props = {
  icon: string,
  title: string,
  subtitle: string
}

const Card: React.FC<Props> = (props) => {
  return (
    <>
      <div className={style.card}>
        <img src={props.icon} className={style.cardIcon} />
        <h1 className={style.cardTitle}>{props.title}</h1>
        <p className={style.cardSubtitle}>{props.subtitle}</p>
      </div>
    </>
  )
}

export default Card