import React from 'react'

type Props = {}

const Modal: React.FC<Props> = (props) => {
    const modal = document.querySelector('#modal')
    
  return (
    <dialog id='modal' className='modal'>Modal</dialog>
  )
}

export default Modal