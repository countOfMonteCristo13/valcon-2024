import './ErrorMessage.css'

type ErrorMessageProps = {
    name:string;
}

const ErrorMessage = ({name}:ErrorMessageProps) => {
  return (
    <p className='add-prop-form__input-error'>
      {name}
    </p>
  )
}

export default ErrorMessage
