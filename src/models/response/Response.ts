import { Pageable } from "../Pageable";
import { Sort } from "../Sort";

export interface Response<T>{
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
    content:T[];
}