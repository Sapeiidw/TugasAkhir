import React, { useState } from 'react'

type Props = {
    open: boolean,
}

const Modal: React.FC<Props> = (props) => {
    const [open, setOpen] = useState(props.open || false)
    const handleModal = () => { setOpen(!open) }
  return (
    <div className='modal-container'>
        <div className={`${open && "open"} modal`}>
            <button onClick={()=>handleModal()}>X</button>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci architecto facere perspiciatis cum ea fugit earum, id dolore expedita nisi nobis distinctio asperiores enim velit odit? Nesciunt nihil magni dolores?
            {props.children}
        </div>
    </div>
  )
}

export default Modal