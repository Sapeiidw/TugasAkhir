import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button, Guest } from '../../components'
import style from '../../styles/Auth.module.css'

type Props = {}

const ResendEmail: React.FC<Props> = (props) => {
    return (
        <Guest>
            <div className={style.forgotPassword}>
                <div className={style.forgotPasswordWrapper}>
                    <div className={style.img}>
                        <Image src="/images/Currency Crush Password.svg" layout='fill' />
                    </div>
                    <div className="text">
                        <h1 className="title">Please Check Your Email</h1>
                        <p className="subtitle">We already send you a link to reset your password at youremail@gmail.com</p>
                        <p className="subtitle">Didn&apos;t receive an email?</p>
                    </div>
                    <form action="/" className={style.forgotPasswordForm}>
                        <Button type="btnPrimary" text="Resend email" />
                    </form>
                    <Link href="/auth/forgot-password"><a>Want changes email?</a></Link>
                </div>
            </div>
        </Guest>
    )
}

export default ResendEmail