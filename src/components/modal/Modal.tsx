import { ReactNode } from 'react'
import { LuX } from 'react-icons/lu';
import { flexCenter } from '../../styles/index.css';
import { modalBodyStyle, modalCloseButton, modalStyle } from './ModalStyle.css';

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
    <div className={`${flexCenter} ${modalStyle}`} onClick={handleCloseModal}>
      <div className={`${modalBodyStyle}`} onClick={(e) => e.stopPropagation()}>
          <div className={`${modalCloseButton}`} onClick={handleCloseModal}>
            <LuX size={40}/>
          </div>
          {children}
      </div>
    </div>
  );
}

export default Modal;

