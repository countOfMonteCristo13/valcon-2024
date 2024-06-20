import LoginForm from "../../layouts/loginPage/loginForm/LoginForm"
import { backgroundTertiary, directionColumn, flexCenter, gap0_5, heightScreen, textColor } from "../../styles/index.css"
import { loginPageHeadingStyle } from "./LoginPageStyle.css"


const LoginPage = () => {
  return (
    <div className={`${heightScreen} ${flexCenter} ${directionColumn} ${gap0_5} ${backgroundTertiary}`}>
        <h1 className={`${textColor} ${loginPageHeadingStyle}`}>Welcome to Props</h1>
      <LoginForm/>
    </div>
  )
}

export default LoginPage
