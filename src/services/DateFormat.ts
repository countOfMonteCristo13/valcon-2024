export const dateFormat = (date:Date): string => {
    const dateTime = new Date(date).toDateString();
    const hourTime = new Date(date).toLocaleTimeString([], {
        minute: '2-digit',
        hour: '2-digit',
        hour12:false
    });
    
    return `${hourTime} ${dateTime}`;

}
