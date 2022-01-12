import {Customer} from "../type/customer";
import {FETCH_CUSTOMER} from "../actions";

export type CustomerAction = {
    type: string
    payload: Customer[]
};
export type CustomerState = Customer[];

const reducer = (state: CustomerState = [], action: CustomerAction) => {
    switch (action.type) {
        case FETCH_CUSTOMER:
            return [...action.payload];
        default:
            return state;
    }
}

export default reducer;