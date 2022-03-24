import Image from 'next/image'
import React from 'react'
import { Button } from '../components'
import style from '../styles/CustomPage.module.css'

const Custom404 = () => {
    return (
        <>
            <div className={style.page}>
                <div className={style.wraper}>
                    <div className={style.img}>
                        <Image src="/images/Humaaans 1 Character.svg" layout="fill" />
                        <div className={style.text}>404</div>
                    </div>
                    <div>
                        <div className={style.title}>Oopss...</div>
                        <div className={style.subtitle}>Page not Found</div>
                    </div>
                    <Button type="btn-primary" text='Back' />
                </div>
            </div>
        </>
    )
}

export default Custom404