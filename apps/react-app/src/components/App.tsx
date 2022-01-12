import React, {useEffect, useReducer} from "react";
import CustomerForm from "./CustomerForm";
import CustomerRows from "./CustomerRows";
import reducer, {CustomerAction} from "../reducers";
import {FETCH_CUSTOMER} from "../actions";
import {getCustomerAPI} from "../api";

const fetchCustomer = async (dispatch: React.Dispatch<CustomerAction>): Promise<void> => {
    try {
        const customerList = await getCustomerAPI();
        dispatch({
            type: FETCH_CUSTOMER,
            payload: customerList
        });
    } catch (e) {
        console.log(e)
    }
}

const App: React.FC = () => {
    const [state, dispatch] = useReducer(reducer, []);

    useEffect(() => {
        (async () => await fetchCustomer(dispatch))();
    }, []);

    return (
        <div className={"container"}>
            <CustomerForm fetchCustomer={fetchCustomer} dispatch={dispatch} />
            <CustomerRows state={state}/>
        </div>
    );
}

export default App;