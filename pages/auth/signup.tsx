import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import style from '../../styles/Auth.module.css'

type Props = {}

const Signup: React.FC<Props> = (props) => {
  return (
    <>
        <div className="flex-row-center">
            <div className={style.text}>
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
                <div className={style.text}>
                    <h1 className={style.title}>SIGN UP</h1>
                    <h1 className={style.subtitle}>Already have an account?
                        <Link href=""><a >Login here.</a></Link>
                    </h1>
                </div>
                <form action="">
                    <div className={style.formGroup}>
                        <label htmlFor="name">Name</label>
                        <input type="text" name='name' placeholder='Name'  />
                    </div>
                </form>
            </div>

        </div>
    </>
  )
}

export default Signup