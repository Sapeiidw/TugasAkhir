import React, { useMemo } from 'react'
import { StarIcon } from '..'

type Props = {
    rating: number,
    index: number,
}

const RatingDisplay: React.FC<Props> = (props) => {
    const fill = useMemo(() => {
        if(props.rating >= props.index) {
            return "yellow"
        } else {
            return "none"
        }
    },[props.rating, props.index])

    return (
        <>
            <StarIcon fill={fill} />
        </>
    )
}

export default RatingDisplay