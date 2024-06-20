import { textError } from '../../../styles/index.css';

type ErrorMessageProps = {
    name:string;
}

const ErrorMessage = ({name}:ErrorMessageProps) => {
  return (
    <p className={textError}>
      {name}
    </p>
  )
}

export default ErrorMessage
