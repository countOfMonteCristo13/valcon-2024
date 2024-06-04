import { ChangeEvent, useState } from "react"
import InputFormField from "../InputFormField/InputFormField";
import Button from "../Button/Button";
import './LoginForm.css'


const LoginForm = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
        // console.log(username)
    }
    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
        // console.log(password)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log({
            username,
            password
        });
    }


  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <InputFormField label="Username" placeholder="petar@gmail.com" id="username" value={username} onChange={handleUsernameChange}/>
      <InputFormField label="Password" id="password" value={password} inputType="password" onChange={handlePasswordChange}/>
      <Button title="Login" type="submit"/>
    </form>
  )
}

export default LoginForm
