import Link from 'next/link'
import React from 'react'
import style from "../../styles/Footer.module.css";

type Props = {}

const Footer: React.FC<Props> = (props) => {
  return (
    <>
        <footer className={style.footer}>
            <div className="container relative">
            <p className={style.footerText}>© 2021 Inposery. All rights reserved</p>
            <div className={style.footerSosmed}>
                <Link href=""><img src="/icons/facebook.svg" alt="Facebook" /></Link>
                <Link href=""><img src="/icons/twitter.svg" alt="Tweeter" /></Link>
                <Link href=""><img src="/icons/instagram.svg" alt="Instagram" /></Link>
            </div>
            </div>
        </footer>
    </>
  )
}

export default Footer