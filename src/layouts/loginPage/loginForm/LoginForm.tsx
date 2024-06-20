import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { addDataToLocalStorage } from "../../../services/LocalStorageService";
import { login } from "../../../services/AuthService";
import { LoginFormData } from "../../../models/LoginFormData";
import InputFormField from "../../../components/inputFormField/InputFormField";
import Button from "../../../components/button/Button";
import { loginFormSubmitButton, loginFormStyle, loginFormTitle } from "./LoginFormStyle.css";
import { backgroundSecondary, borderRadius0_5, directionColumn, flexAlignCenter, fullWidth, gap1, padding0_5, padding2, textColor, textError } from "../../../styles/index.css";


const LoginForm = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [hasIncorrectCredentials, setHasIncorrectCredentials] = useState<boolean>(false);
    const [hasPasswordError, setHasPasswordError] = useState<boolean>(false);
    const [hasUsernameError, setHasUsernameError] = useState<boolean>(false);

    const validateInputFields = (formData:LoginFormData) => {
      if (!formData.username || !formData.password) {
        return false;
      }
      return true;
    }

    const handleUsernameOnBlur = () => {
      if(!username.trim()){
        setHasUsernameError(true)
      }
    }

    const handlePasswordOnBlur = () => {
      if(!password.trim()){
        setHasPasswordError(true)
      }
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      const formData: LoginFormData = {
        username,
        password
      }

      e.preventDefault();
      if(validateInputFields(formData)){

        login(formData).then(({accessToken, refreshToken}) => {
          setUsername('');
          setPassword('');
          setHasPasswordError(false);
          setHasUsernameError(false);
          setHasIncorrectCredentials(false);

          addDataToLocalStorage('accessToken', accessToken);
          addDataToLocalStorage('refreshToken', refreshToken);

          navigate('/');

        }).catch(() => {
          setHasIncorrectCredentials(true)
        });

      }else{
        setHasPasswordError(true);
        setHasUsernameError(true);
      }
    }


  return (
    <form className={`${flexAlignCenter} ${directionColumn} ${padding2} ${borderRadius0_5} ${backgroundSecondary} ${loginFormStyle}`} onSubmit={handleSubmit}>
      <h1 className={`${textColor} ${loginFormTitle}`}>Login</h1>
      <div className={`${flexAlignCenter} ${directionColumn} ${gap1} ${fullWidth}`}>
        <InputFormField 
          label="Username" 
          hasError={hasUsernameError || hasIncorrectCredentials} 
          placeholder="username@mail.com" 
          id="username"
          name='username'
          inputType="email" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          onFocus={() => setHasUsernameError(false)} 
          onBlur={handleUsernameOnBlur}
          fieldClassName={textColor}
          className={`${textColor} ${padding0_5}`}
        />
        <InputFormField 
          label="Password" 
          hasError={hasPasswordError || hasIncorrectCredentials} 
          placeholder="*********" 
          id="password" 
          name="password"
          value={password} 
          inputType="password" 
          onChange={(e) => setPassword(e.target.value)} 
          onFocus={() => setHasPasswordError(false)} 
          onBlur={handlePasswordOnBlur}
          fieldClassName={textColor}
          className={`${textColor} ${padding0_5}`}
        />
        {
          (hasUsernameError || hasPasswordError) && 
          <p className={textError}>All fields are required</p>
        }
        {
          hasIncorrectCredentials && 
          <p className={textError}>Wrong credentials</p>
        }
      </div>
      <Button title="Login" type="submit" className={loginFormSubmitButton}/>
    </form>
  )
}

export default LoginForm
