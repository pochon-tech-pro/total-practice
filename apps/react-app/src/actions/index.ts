import {Customer} from "../type/customer";

export const FETCH_CUSTOMER = 'FETCH_CUSTOMER';
export type CustomerAction = {
    type: typeof FETCH_CUSTOMER
    payload: Customer[]
};

