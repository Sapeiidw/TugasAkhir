import Image from 'next/image'
import React from 'react'
import style from '../../styles/Dashboard.module.css'

type Props = {}

const Dashboard: React.FC<Props> = (props) => {
  return (
    <>
        <nav className={style.nav}>
            <div className={style.start}>
                <div className={style.diamonds}>
                    <Image src="/icons/diamonds.svg" alt="logo" layout='fill'/>
                </div>
                <div className={style.logo}>
                    <Image src="/icons/InPOSery.svg" alt="logo" layout="fill" />
                </div>
            </div>
            <div className={style.end}>
                <div className={style.notif}>
                    <Image src="/icons/bell.svg" alt="logo" layout="fill" />
                </div>
                <div className={style.profile}>
                    
                </div>
            </div>
        </nav>
            {props.children}
    </>
  )
}

export default Dashboard