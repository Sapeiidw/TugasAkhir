import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button, Input } from '../../components'
import style from '../../styles/Auth.module.css'

type Props = {}

const Signup: React.FC<Props> = (props) => {
  return (
    <>
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
                        <h1 className={style.subtitle}>Already have an account? <Link href=""><a>Login here.</a></Link></h1>
                    </div>
                    <form action="" className={style.form}>
                        <Input type='text' name='name' placeholder='Name' label='Name' />
                        <Input type='email' name='email' placeholder='Email' label='Email' />
                        <Input type='password' name='password' placeholder='Password' label='Password' />
                        <Button type='btn-primary' text='Create Your Account' />
                        <Button type='btn-inverse' text='Sign Up With Google' icon='' />
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default Signup