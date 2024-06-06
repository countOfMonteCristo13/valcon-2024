export type AuthRequestModel = {
    usernameOrEmail: string;
    password:string;
    rememberMe:boolean;
}

export type AuthResponseModel = {
    username: string;
    accessToken:string;
    refreshToken:string;
}