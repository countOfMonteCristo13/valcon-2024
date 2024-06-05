import { useState } from "react"
import './LoginForm.css'
import InputFormField from "../../components/inputFormField/InputFormField";
import Button from "../../components/button/Button";


const LoginForm = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [hasBackendError, setHasBackendError] = useState<boolean>(false);
    const [hasPasswordError, setHasPasswordError] = useState<boolean>(false);
    const [hasUsernameError, setHasUsernameError] = useState<boolean>(false);

    const validateInputFields = (username:string, password: string) => {
      if (!username || !password) {
        return false;
      }
      return true;
    }

    const handleUsernameOnBlur = () => {
      if(!username){
        setHasUsernameError(true)
      }
    }

    const handlePasswordOnBlur = () => {
      if(!password){
        setHasPasswordError(true)
      }
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

      e.preventDefault();
      if(validateInputFields(username, password)){
        setUsername('');
        setPassword('');
        setHasPasswordError(false);
        setHasUsernameError(false);
      }else{
        setHasPasswordError(true);
        setHasUsernameError(true);
      }
    }


  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h1 className="login-form__title">Login</h1>
      <div className="login-form__inputs">
        <InputFormField 
          label="Username" 
          className={hasUsernameError || hasBackendError ? 'red-border-bottom' : ''} 
          placeholder="username@mail.com" 
          id="username" 
          inputType="email" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          onFocus={() => setHasUsernameError(false)} 
          onBlur={handleUsernameOnBlur}
        />
        <InputFormField 
          label="Password" 
          className={hasPasswordError || hasBackendError ? 'red-border-bottom' : ''} 
          placeholder="*********" 
          id="password" 
          value={password} 
          inputType="password" 
          onChange={(e) => setPassword(e.target.value)} 
          onFocus={() => setHasPasswordError(false)} 
          onBlur={handlePasswordOnBlur}
        />
        {
          (hasUsernameError || hasPasswordError) && 
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
