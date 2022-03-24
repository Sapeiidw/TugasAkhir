import Link from 'next/link'
import React from 'react'
import style from '../../styles/Navigation.module.css'

type Props = {}

const Navigation: React.FC<Props> = (props) => {
  return (
    <>
      <nav className={style.nav}>
        <div className="container flex-row-center justify-between">
          <img src="/icons/InPOSery.svg" alt="logo" className='logo' />
          <div className={style.navLinks}>
            <Link href=""><a className={style.navItem}>Home</a></Link>
            <Link href=""><a className={style.navItem}>Feature</a></Link>
            <Link href=""><a className={style.navItem}>Review</a></Link>
            <Link href=""><a className={style.navItem}>Pricing</a></Link>
          </div>
          <Link href="/auth/signin"><a className='btn btn-link'>Masuk</a></Link>`
        </div>
      </nav>
    </>
  )
}

export default Navigation