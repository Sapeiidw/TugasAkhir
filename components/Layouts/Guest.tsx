import React from 'react'

type Props = {}

const Guest: React.FC<Props> = (props) => {
  return (
    <>
    <img src="/icons/InPOSery.svg" alt="guestLogo" className='guestLogo'/>
    {props.children}
    </>
  )
}

export default Guest