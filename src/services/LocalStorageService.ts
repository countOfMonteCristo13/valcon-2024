import { Tokens } from "../models/Tokens";

export const addDataToLocalStorage = (key: string, data: string) => {
    localStorage.setItem(key, JSON.stringify(data));
};
  
export const getDataFromLocalStorage = (key: string) => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
};

export const clearStorage = () => {
    localStorage.clear();
}

export const addTokensToLocalStorage = (tokens: Tokens) => {
    addDataToLocalStorage('refreshToken',tokens.refreshToken);
    addDataToLocalStorage('accessToken',tokens.accessToken);
}