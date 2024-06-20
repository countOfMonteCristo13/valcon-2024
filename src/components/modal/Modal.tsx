import { ReactNode } from 'react'
import { LuX } from 'react-icons/lu';
import { backgroundTertiary, cursorPointer, flex, flexCenter, fullScreen, textColor } from '../../styles/index.css';
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
    <div className={`${flexCenter} ${fullScreen} ${modalStyle}`} onClick={handleCloseModal}>
      <div className={`${fullScreen} ${backgroundTertiary} ${flex} ${modalBodyStyle} ${className}`} onClick={(e) => e.stopPropagation()}>
          <div className={`${modalCloseButton} ${cursorPointer} ${textColor}`} onClick={handleCloseModal}>
            <LuX size={40}/>
          </div>
          {children}
      </div>
    </div>
  );
}

export default Modal;

