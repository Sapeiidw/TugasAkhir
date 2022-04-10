import Image from 'next/image'
import Link from 'next/link'
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
        <div className={style.sidebar}>
            <div className={style.sidebarTop}>
                <Link href="/">
                    <a className={style.sidebarItems}>
                        <img src="/icons/home.svg" alt="" />
                        Home</a>
                </Link>
                <Link href="/">
                    <a className={style.sidebarItems}>
                        <img src="/icons/home.svg" alt="" />
                        Home</a>
                </Link>
                <Link href="/">
                    <a className={style.sidebarItems}>
                        <img src="/icons/home.svg" alt="" />
                        Home</a>
                </Link>
            </div>
            <div className={style.sidebarBottom}>
                <Link href="/">
                    <a className={style.sidebarItems}>
                        <img src="/icons/home.svg" alt="" />
                        Home</a>
                </Link>
            </div>
        </div>
        <main className={style.main}>
            {props.children}
        </main>
    </>
  )
}

export default Dashboard