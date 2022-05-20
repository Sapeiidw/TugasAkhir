import React, { SyntheticEvent } from 'react'
import { Button } from '..'
import style from '../../styles/Cards.module.css'

type Props = {
  recomend?: boolean,
  onClick?: (e: SyntheticEvent) => void;
}

const PlanCard: React.FC<Props> = (props) => {
  return (
    <>
      <div className={`${style.planCard} ${props.recomend && style.planCardRecomend}`}>
        <div className={style.planTitle}>Monthly</div>
        <ul className={style.planFeatures}>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
        </ul>
        <p className={style.planPrice}>Rp.<span>123</span>/month</p>
        <Button size="btnBig" color='btnPrimary' onClick={props.onClick} text="Choose" />
      </div>
    </>
  )
}

export default PlanCard