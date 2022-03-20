import React, { useMemo } from 'react'
import { StarIcon } from '..'

type Props = {
    rating: number,
    hoverRating: number,
    index: number,
    onMouseEnter: Function,
    onMouseLeave: Function,
    onSaveRating: Function,
}

const RatingIcon: React.FC<Props> = (props) => {
    const fill = useMemo(() => {
        if(props.hoverRating >= props.index) {
            return "yellow"
        } else if(!props.hoverRating && props.rating >= props.index) {
            return "yellow"
        } else {
            return "none"
        }
    },[props.rating, props.hoverRating, props.index])

    return (
        <div
            onMouseEnter={() => props.onMouseEnter(props.index)} 
            onMouseLeave={() => props.onMouseLeave()} 
            onClick={() => props.onSaveRating(props.index)}>
            <StarIcon fill={fill} />
        </div>
    )
}

export default RatingIcon