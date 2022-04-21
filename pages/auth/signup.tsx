import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button, Guest, Input } from '../../components'
import style from '../../styles/Auth.module.css'

type Props = {}

const Signup: React.FC<Props> = (props) => {
    const e = process.env.NEXT_PUBLIC_MAINTENANCE
    return (
        <Guest>
            <div className="flex-row-center">
                <div className={style.banner}>
                    <div className={style.header}>
                        <h1 className={style.title}>Lets Get Started For Free </h1>
                        <p className={style.subtitle}>Gets your 14 Days Free Trial</p>
                    </div>
                    <div className={style.img}>
                        <Image src="/images/signIlustration.svg" layout="fill" />
                    </div>
                    <div className={style.footer}>Sistem POS dan manajemen Inventori terbaik untuk Toko anda</div>
                </div>
                <div className={style.signForm}>
                    <div className={style.wrapper}>
                        <div className={style.text}>
                            <h1 className={style.title}>SIGN UP</h1>
                            <h1 className={style.subtitle}>Already have an account? <Link href="/auth/signin"><a>Login here.</a></Link></h1>
                        </div>

                        <form action="" className={style.form}>
                            <Input onChange={() => null} type='text' name='name' placeholder='Name' label='Name' />
                            <Input onChange={() => null} type='email' name='email' placeholder='Email' label='Email' />
                            <Input onChange={() => null} type='password' name='password' placeholder='Password' label='Password' />
                            <br />
                            <Button type="btnPrimary" text='Create Your Account' />
                            <div className={style.stroke}>
                                <span>Or</span>
                            </div>
                            <Button type="btnInverse" text='Sign Up With Google' icon='/icons/google.svg' />

                        </form>
                    </div>
                </div>
            </div>
        </Guest>
    )
}

export default Signup