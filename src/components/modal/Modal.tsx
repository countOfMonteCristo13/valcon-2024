import { ReactNode } from 'react'
import { LuX } from 'react-icons/lu';
import { cursorPointer, flexCenter } from '../../styles/index.css';
import { modalBodyStyle, modalCloseButton, modalStyle } from './ModalStyle.css';

type ModalProps = {
    children?: ReactNode;
    closeModal: () => void;
    className?:string
}

const Modal = ({ children, closeModal,className }: ModalProps) => {

  const handleCloseModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    closeModal();
  };

  return (
    <div className={`${flexCenter} ${modalStyle}`} onClick={handleCloseModal}>
      <div className={`${modalBodyStyle} ${className}`} onClick={(e) => e.stopPropagation()}>
          <div className={`${modalCloseButton} ${cursorPointer}`} onClick={handleCloseModal}>
            <LuX size={40}/>
          </div>
          {children}
      </div>
    </div>
  );
}

export default Modal;

