import { ActivationStatus } from "../PropsData";

export type GetHashtagsRequestQuery = {
    page: number;
    size: number;
    sort: string;
    active?: ActivationStatus;
    search?:string;
}