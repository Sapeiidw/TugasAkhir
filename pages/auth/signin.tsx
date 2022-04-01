import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button, Input } from '../../components'
import Guest from '../../components/Layouts/Guest'
import useForm from '../../hooks/useForm'
import style from '../../styles/Auth.module.css'

type Props = {}

const Signin: React.FC<Props> = (props) => {
    const {handleSubmit, handleChange} = useForm()
    return (
        <Guest>
            <div className="flex-row-center">
                <div className={style.banner}>
                    <div className={style.header}>
                        <h1 className={style.title}>Welcome Back </h1>
                        <p className={style.subtitle}>Check your dashboard of your store and manage stock of the product</p>
                    </div>
                    <div className={style.img}>
                        <Image src="/images/signIlustration1.svg" layout="fill" />
                    </div>
                </div>
                <div className={style.signForm}>
                    <div className={style.wrapper}>
                        <div className={style.text}>
                            <h1 className={style.title}>SIGN IN</h1>
                            <h1 className={style.subtitle}>Didn’t have an account yet? <Link href="/auth/signup"><a>Register here.</a></Link></h1>
                        </div>
                        <form onSubmit={handleSubmit} className={style.form}>
                            <Input onChange={handleChange} type='email' name='email' placeholder='Email' label='Email' />
                            <Input onChange={handleChange} type='password' name='password' placeholder='Password' label='Password' />
                            <Link href="/auth/forgot-password"><a className={style.forgotPasswordLink}>Forgot Password?</a></Link>
                            <Button type='btn-primary' text='Login' />
                            <div className={style.stroke}>
                                <span>Or</span>
                            </div>
                            <Button type='btn-inverse' text='Sign Up With Google' icon='/icons/google.svg' />

                        </form>
                    </div>
                </div>
            </div>
        </Guest>
    )
}

export default Signin