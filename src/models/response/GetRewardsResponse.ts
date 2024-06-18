import { Pageable } from "../Pageable";
import { Reward } from "../RewardsData";
import { Sort } from "../Sort";

export type GetRewardsResponse = {
    totalPages: number;
    totalElements: number;
    last: boolean;
    pageable: Pageable;
    numberOfElements: number;
    first: boolean;
    size: number;
    number: number;
    sort: Sort;
    empty:boolean;
    content:Reward[];
}