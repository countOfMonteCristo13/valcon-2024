import { useState } from "react"
import './LoginForm.css'
import InputFormField from "../../components/inputFormField/InputFormField";
import Button from "../../components/button/Button";


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
      <h1 className="login-form__title">Login</h1>
      <div className="login-form__inputs">
      <InputFormField label="Username" placeholder="username@mail.com" id="username" inputType="email" value={username} onChange={(e) => setUsername(e.target.value)}/>
      <InputFormField label="Password" placeholder="*********" id="password" value={password} inputType="password" onChange={(e) => setPassword(e.target.value)}/>
      {
        hasError && 
        <p className="login-form__error">All fields are required</p>
      }
      {
        hasBackendError && 
        <p className="login-form__error">Wrong credentials</p>
      }
      </div>
      <Button title="Login" type="submit" className="login-form__button"/>
    </form>
  )
}

export default LoginForm
