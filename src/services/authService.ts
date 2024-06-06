import axios from "axios";
import { LoginFormData } from "../models/LoginFormData";
import { AuthRequestModel } from "../models/AuthModels";

const authEndpoint = 'auth/token'

export const handleLogin = async (formData: LoginFormData) => {
    const requestBody: AuthRequestModel = {
        usernameOrEmail: formData.username,
        password: formData.password,
        rememberMe: true
    }

    await axios.post(`${import.meta.env.BASE_URL + authEndpoint}`,requestBody).then((response) => {
        console.log(response);
    })

}