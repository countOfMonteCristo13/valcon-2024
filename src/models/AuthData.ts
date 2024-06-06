export type AuthRequestData = {
    usernameOrEmail: string;
    password:string;
    rememberMe:boolean;
}

export type AuthResponseData = {
    username: string;
    accessToken:string;
    refreshToken:string;
}