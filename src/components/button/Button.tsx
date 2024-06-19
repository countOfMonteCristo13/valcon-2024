import { borderRadius0_5 } from '../../styles/index.css';
import { buttonStyle } from './ButtonStyle.css'

type ButtonProps = {
    title:string;
    type?: "submit" | "reset" | "button" | undefined;
    onClick?: () => void;
    className?: string;
    disabled?: boolean
}

const Button = ({title, type = 'button', onClick,className='', disabled=false}:ButtonProps) => {
  return (
    <button className={`${buttonStyle} ${borderRadius0_5} ${className}`} type={type} onClick={onClick} disabled={disabled}>
      {title}
    </button>
  )
}

export default Button