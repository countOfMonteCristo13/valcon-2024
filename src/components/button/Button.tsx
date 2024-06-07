import './Button.css'

type ButtonProps = {
    title:string;
    type?: "submit" | "reset" | "button" | undefined;
    onClick?: () => void;
    className?: string;
    disabled?: boolean
}

const Button = ({title, type, onClick,className='', disabled=false}:ButtonProps) => {
  return (
    <button className={`button ${className}`} type={type} onClick={onClick} disabled={disabled}>
      {title}
    </button>
  )
}

export default Button