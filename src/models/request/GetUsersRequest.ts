import { ActivationStatus } from "../PropsData";

export type GetUsersRequestQuery = {
    page: number;
    size: number;
    sort: string;
    active?: ActivationStatus;
    search?:string;
}