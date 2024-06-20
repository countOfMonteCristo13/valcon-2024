export const buildImageURL = (theme:boolean,imageURL?: string): string => {
    if(!imageURL){
        return theme ? '/src/assets/user-light.png' : '/src/assets/user-dark.png';
    }
    const BASE_IMG_URL = import.meta.env.VITE_IMAGE_BASE_URL;
    const newImage = BASE_IMG_URL + imageURL;
    return newImage;
}
export const buildRewardImageURL = (theme:boolean,imageURL?: string): string => {
    if(!imageURL){
        return theme ? '/src/assets/gift-light.png' : '/src/assets/gift-dark.png';
    }
    const BASE_IMG_URL = import.meta.env.VITE_REWARD_IMAGE_BASE_URL;
    const newImage = BASE_IMG_URL + imageURL;
    return newImage;
}