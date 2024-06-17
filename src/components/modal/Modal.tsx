import { ReactNode } from 'react'
import { LuX } from 'react-icons/lu';
import './Modal.css'

type ModalProps = {
    children?: ReactNode;
    closeModal: () => void;
}

const Modal = ({ children, closeModal }: ModalProps) => {

  const handleCloseModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    closeModal();
  };

  return (
    <div className='modal' onClick={handleCloseModal}>
      <div className='modal__body' onClick={(e) => e.stopPropagation()}>
          <div className='modal__body__close-button' onClick={handleCloseModal}>
            <LuX size={40}/>
          </div>
          {children}
      </div>
    </div>
  );
}

export default Modal;

