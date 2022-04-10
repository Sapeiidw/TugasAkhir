import React from 'react'
import { Button, Modal, Dashboard } from '../../components'
import style from '../../styles/Dashboard.module.css'

type Props = {}

const index: React.FC<Props> = (props) => {
  return (
    <Dashboard>
        <header>
          <h1>Your Store</h1>
          <form>
            <img src="/icons/search.svg" alt="" />
            <input type="text" placeholder='Search your store ...' />
          </form>
          <button>+ Create New Store</button>
        </header>
        <div className={style.mainContent}>
          <div className={style.card}>
            <div className={style.cardOption}>
              <img src="/icons/home.svg" alt="" />
            </div>
            <img src='/icons/home.svg' className={style.cardIcon}></img>
            <h1 className={style.cardTitle}>Inposery Store 2</h1>
            <p className={style.cardSubitle}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, nostrum!</p>
            <div className={style.cardProgress}></div>
          </div>
          <div className={style.card}>
            <div className={style.cardOption}>
              <img src="/icons/home.svg" alt="" />
            </div>
            <img src='/icons/home.svg' className={style.cardIcon}></img>
            <h1 className={style.cardTitle}>Inposery Store 2</h1>
            <p className={style.cardSubitle}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, nostrum!</p>
            <div className={style.cardProgress}></div>
          </div>
          <Modal open={true} />
        </div>
    </Dashboard>
  )
}

export default index