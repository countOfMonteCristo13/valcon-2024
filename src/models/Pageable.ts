import { Sort } from "./Sort";

export type Pageable = {
    unpaged: boolean;
    pagedd: boolean;
    pageNumber: number;
    pageSize: number;
    offset: number;
    sort: Sort;
}