import { User, UserPoints } from "./UserData";

export enum ActivationStatus {
    Active = 'ACTIVE',
    Deactivated = 'DEACTIVATED',
    Pending = 'PENDING'
}

export type Department = {
    id: number;
    name: string;
    creationTime: string;
}

export type Country = {
    id: number;
    name: string;
    countryCode: string;
    creationTime: string;
}

export type PropsUser = {
    id: number;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    profileImageReference: string;
    birthdate: string;
    startDate: string;
    roles: string[];
    department: Department;
    country: Country;
    status: ActivationStatus;
    creationTime: string;
}

export type Hashtag = {
    id: number;
    name: string;
    description: string;
    custom: boolean;
    status: ActivationStatus;
    creationTime: Date;
}

export type PropModel = {
    id: number;
    fromUser: PropsUser;
    toUser:PropsUser;
    hashtags: Hashtag[];
    message: string;
    gifUrl: string;
    propPoints: number;
    totalPoints:number;
    userPoints: UserPoints[];
    totalCommentsCount: number;
    userComments: User[];
    creationTime: Date;
}