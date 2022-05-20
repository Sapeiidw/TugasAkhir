import Image from 'next/image'
import React from 'react'
import { Button, Guest } from '../components'
import style from '../styles/CustomPage.module.css'

const Maintenance = () => {
    return (
        <Guest>
            <div className={style.page}>
                <div className={style.wraper}>
                    <div className={style.img}>
                        <Image src="/images/Humaaans 1 Character.svg" layout="fill" />
                    </div>
                    <div>
                        <div className={style.title}>Under Maintence</div>
                        <div className={style.subtitle}>The pages you currently want is undermaintence and we will back soon</div>
                    </div>
                    <Button color="btnPrimary" size="btnBig" text='Back' />
                </div>
            </div>
        </Guest>
    )
}

export default Maintenance