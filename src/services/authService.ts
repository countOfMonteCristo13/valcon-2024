import axios from "axios";
import { LoginFormData } from "../models/LoginFormData";
import { AuthRequestModel } from "../models/AuthModels";
import { LoginResponseData } from "../models/LocalStorageData";

const authEndpoint = '/auth/token'

export const login = async (formData: LoginFormData) => {
    const requestBody: AuthRequestModel = {
        usernameOrEmail: formData.username,
        password: formData.password,
        rememberMe: true
    }

    return axios.post<LoginResponseData>(`${import.meta.env.VITE_BASE_URL + authEndpoint}`,requestBody).then((response) => {
        return response.data;
    });

}