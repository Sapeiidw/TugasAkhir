import React from 'react'
import style from '../../styles/Cards.module.css'

type Props = {
  recomend?: boolean
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
        <button className="btn btn-link">Choose</button>
      </div>
    </>
  )
}

export default PlanCard