import { ChangeEvent, useState } from "react"
import InputFormField from "../inputFormField/InputFormField";
import Button from "../Button/Button";
import './LoginForm.css'


const LoginForm = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [hasBackendError, setHasBackendError] = useState<boolean>(false);
    const [hasError, setHasError] = useState<boolean>(false);

    const validateInputFields = (username:string, password: string) => {
      if (!username || !password) {
        return false;
      }
      return true;
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

      e.preventDefault();
      if(validateInputFields(username, password)){
        setUsername('');
        setPassword('');
        setHasError(false);
      }else{
        setHasError(true);
      }
    }


  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <InputFormField label="Username" placeholder="username@mail.com" id="username" inputType="email" value={username} onChange={(e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}/>
      <InputFormField label="Password" id="password" value={password} inputType="password" onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}/>
      {
        hasError && 
        <p className="login-form__error">All fields are required</p>
      }
      {
        hasBackendError && 
        <p className="login-form__error">Wrong credentials</p>
      }
      <Button title="Login" type="submit"/>
    </form>
  )
}

export default LoginForm
