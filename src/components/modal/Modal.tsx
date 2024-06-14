import { ReactNode } from 'react'
import './Modal.css'

type ModalProps = {
    children?:ReactNode;
}

const Modal = ({children}: ModalProps) => {
  return (
    <div className='modal'>
      {children}
    </div>
  )
}

export default Modal
