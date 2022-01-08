import {Customer} from "../type/customer";

export type CustomerAction = {
    type: string
    payload: Customer
};
export type CustomerState = Customer[];

const reducer = (state: CustomerState = [], action: CustomerAction) => {
    switch (action.type) {
        case 'CREATE_CUSTOMER':
            return [...state, {name: action.payload.name, tel: action.payload.tel}];
        default:
            return state;
    }
}

export default reducer;