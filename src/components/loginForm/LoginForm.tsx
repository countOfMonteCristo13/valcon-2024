import { ChangeEvent, useState } from "react"
import InputFormField from "../inputFormField/InputFormField";
import Button from "../Button/Button";
import './LoginForm.css'


const LoginForm = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [backendError, setBackendError] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);

    const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    }

    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

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
        setError(false);
      }else{
        setError(true);
      }
    }


  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <InputFormField label="Username" placeholder="username@mail.com" id="username" inputType="email" value={username} onChange={handleUsernameChange}/>
      <InputFormField label="Password" id="password" value={password} inputType="password" onChange={handlePasswordChange}/>
      {
        error && 
        <p>All fields are required</p>
      }
      {
        backendError && 
        <p>Wrong credentials</p>
      }
      <Button title="Login" type="submit"/>
    </form>
  )
}

export default LoginForm
