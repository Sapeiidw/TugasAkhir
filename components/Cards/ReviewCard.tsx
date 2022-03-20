import Image from 'next/image'
import React from 'react'
import { Ratings } from '..'
import style from '../../styles/Cards.module.css'

type Props = {
    reviewer: string,
    job: string,
    rating: number,
    text: string,
    img: string,
}

const ReviewCard: React.FC<Props> = (props) => {
  return (
    <>
        <div className={style.reviewCard}>
            <div className={style.reviewImg}>
                <Image src={props.img} layout="fill" objectFit='cover'/>
            </div>
            <div className={style.reviewer}>{props.reviewer}</div>
            <div className="flex-row-center justify-between">
                <div className={style.reviewerJob}>{props.job}</div>
                <Ratings disable={true} rating={props.rating}/>
            </div>
            <div className={style.reviewerText}>{props.text}</div>
        </div>
    </>
  )
}

export default ReviewCard