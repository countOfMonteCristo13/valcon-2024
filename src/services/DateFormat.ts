const addZeroes = (value: number): string => {
    return value < 10 ? `0${value}` : String(value);
}

export const dateFormat = (date:Date): string => {
    const dateTime = new Date(date).toDateString();
    const hourTime = new Date(date).toLocaleTimeString([], {
        minute: '2-digit',
        hour: '2-digit'
    });
    


    return `${hourTime} ${dateTime}`;

}
