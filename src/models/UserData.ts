export type User = {
    id: number;
    firstName:string;
    lastName: string;
}

export type UserPoints = {
    user: User,
    points: number;
}