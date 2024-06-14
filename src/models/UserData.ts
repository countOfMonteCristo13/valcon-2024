import { PropsUser } from "./PropsData";

export type User = {
    id: number;
    firstName:string;
    lastName: string;
}

export type UserPoints = {
    user: User,
    points: number;
}


export type UserStats = {
    user: PropsUser;
    giveablePoints: number;
    redeemablePoints: number;
    totalGiveablePoints: number;
    totalRedeemablePoints: number;
    totalGiveableUnusedPoints: number;
  };