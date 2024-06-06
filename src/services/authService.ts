import axios from "axios";
import { LoginFormData } from "../models/LoginFormData";
import { AuthRequestData } from "../models/AuthData";
import { TokenResponseData } from "../models/LocalStorageData";
import { getDataFromLocalStorage } from "./localStorageService";

const authUrl = '/auth/token'
const refreshTokenUrl = '/auth/refresh-token'

export const login = async (formData: LoginFormData) => {
    const requestBody: AuthRequestData = {
        usernameOrEmail: formData.username,
        password: formData.password,
        rememberMe: true
    }

    return axios.post<TokenResponseData>(`${import.meta.env.VITE_BASE_URL + authUrl}`,requestBody).then((response) => {
        return response.data;
    });

}

export const refreshToken = async () => {
    const refreshToken: string | null = getDataFromLocalStorage('refreshToken')

    if (!refreshToken) {
        throw new Error('Refresh token is not available');
    }

    try {
        return axios.post<TokenResponseData>(
            `${import.meta.env.VITE_BASE_URL + refreshTokenUrl}`,
            { refreshToken }
        ).then(response => {
            return response.data;
        })
    } catch (error) {
        throw new Error('Error while refreshing token');
    }
}