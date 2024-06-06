import axios from "axios";
import { refreshToken } from "./authService";
import { addTokensToLocalStorage } from "./localStorageService";


export const axiosInterceptor = axios.create({
    baseURL:`${import.meta.env.VITE_BASE_URL}`
})

axiosInterceptor.interceptors.response.use((response) => {
    return response
},async (error) => {
    const originalRequest = error.config;
    console.log(originalRequest)
    if(error.response.status === 403 && !originalRequest._retry){
        originalRequest._retry = true;
        try {
            const newTokens = await refreshToken();
            
            addTokensToLocalStorage(newTokens);

            axios.defaults.headers.common['Authorization'] = 'Bearer ' + newTokens.accessToken;

            return axiosInterceptor(originalRequest);
        } catch (refreshError) {
            return Promise.reject(refreshError);
        }
    }

    return Promise.reject(error);
}

)