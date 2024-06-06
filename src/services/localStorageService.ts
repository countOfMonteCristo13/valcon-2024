export const addDataToLocalStorage = (key: string, data: string) => {
    localStorage.setItem(key, JSON.stringify(data));
};
  
export const getDataFromLocalStorage = (key: string) => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
};