import React, { useState } from 'react'
import { RatingIcon, RatingDisplay } from '..'
import style from '../../styles/Ratings.module.css'

type Props = {
    disable?: boolean,
    ratings?: number,
}

const Ratings: React.FC<Props> = (props) => {
    const [rating, setRating] = useState<number>(props.ratings || 0)
    const [hoverRating, setHoverRating] = useState<number>(0)

    const onMouseEnter = (index: number) => {
        setHoverRating(index)
    }
    const onMouseLeave = () => {
        setHoverRating(0)
    }
    const onSaveRating = (index: number) => {
        setRating(index)
    }

    return (
        <>
            <div className={style.ratings}>
                {props.disable
                    ?
                    [1, 2, 3, 4, 5].map(index => {
                        return (
                            <RatingDisplay
                                key={index}
                                index={index}
                                rating={rating}
                            />
                        )
                    })
                    :
                    [1, 2, 3, 4, 5].map(index => {
                        return (
                            <RatingIcon
                                key={index}
                                index={index}
                                rating={rating}
                                hoverRating={hoverRating}
                                onMouseEnter={onMouseEnter}
                                onMouseLeave={onMouseLeave}
                                onSaveRating={onSaveRating}
                            />
                        )
                    })

                }
            </div>
        </>
    )
}

export default Ratings;