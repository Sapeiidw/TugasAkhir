import Image from 'next/image'
import React from 'react'
import style from '../../styles/Dashboard.module.css'

type Props = {}

const Dashboard: React.FC<Props> = (props) => {
  return (
    <>
        <nav className='nav'>
            <div className="start">
                <div className={style.diamonds}>
                    <Image src="/icons/diamonds.svg" alt="logo" layout='fill'/>
                </div>
                <div className="logo">
                    <Image src="/icons/InPOSery.svg" alt="logo" layout="fill" />
                </div>
            </div>
            <div className="end">
                <div className="profile">
                    
                </div>
            </div>
            {props.children}
        </nav>
    </>
  )
}

export default Dashboard