import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button, Guest, Input } from '../../components'
import Form from '../../components/Forms/Form'
import style from '../../styles/Auth.module.css'

type Props = {}

const ChangePassword: React.FC<Props> = (props) => {
    return (
        <Guest>
            <div className={style.forgotPassword}>
                <div className={style.forgotPasswordWrapper}>
                    <div className={style.img}>
                        <Image src="/images/Currency Crush Lock 1.svg" layout='fill' />
                    </div>
                    <div className="text">
                        <h1 className='title'>Set your new password</h1>
                        <p className='subtitle'>Your password must be different from your previously used password</p>
                    </div>
                    <form action="" className={style.forgotPasswordForm}>
                        <Input onChange={() => null} label='Password' type='password' name='password' placeholder='Password' />
                        <Input onChange={() => null} label='Password Confirmation' type='password' name='password_confirmation' placeholder='Password Confirmation' />
                        <Button type="btn-primary" text="Reset Password" />
                    </form>
                    <Link href="/auth/signin"><a>Back to Login</a></Link>
                </div>
            </div>
        </Guest>
    )
}

export default ChangePassword