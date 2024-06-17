export const buildImageURL = (imageURL?: string): string => {
    if(!imageURL){
        return '/src/assets/user.png';
    }
    const BASE_IMG_URL = import.meta.env.VITE_IMAGE_BASE_URL;
    const newImage = BASE_IMG_URL + imageURL;
    return newImage;
}
export const buildRewardImageURL = (imageURL?: string): string => {
    if(!imageURL){
        return '/src/assets/gift.png';
    }
    const BASE_IMG_URL = import.meta.env.VITE_REWARD_IMAGE_BASE_URL;
    const newImage = BASE_IMG_URL + imageURL;
    return newImage;
}