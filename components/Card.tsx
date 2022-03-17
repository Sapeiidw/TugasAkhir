import React from 'react'

type Props = {
    icon: string,
    title: string,
    subtitle: string
}

const Card: React.FC<Props> = (props) => {
  return (
    <>
        <div className="card">
            <img src={props.icon} className="card-icon" />
            <h1 className="card-title">{props.title}</h1>
            <p className="card-subtitle">{props.subtitle}</p>
        </div>
    </>
  )
}

export default Card