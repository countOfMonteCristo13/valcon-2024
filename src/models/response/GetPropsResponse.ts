import { Pageable } from "../Pageable";
import { PropModel } from "../PropsData";
import { Sort } from "../Sort";

export type GetPropsResponse = {
    totalPages: number;
    totalElements: number;
    last: boolean;
    pageable: Pageable;
    numberOfElements: number;
    first: boolean;
    size: number;
    content: PropModel[];
    number: number;
    sort: Sort;
    empty:boolean;
}