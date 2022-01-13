import React, {useEffect, useReducer} from "react";
import CustomerForm from "../organisms/CustomerForm";
import CustomerRows from "../organisms/CustomerRows";
import reducer from "../../reducers";
import {FETCH_CUSTOMER} from "../../actions";
import {getCustomerAPI} from "../../api";
import {useAllCustomers} from "../../hooks/useAllCustomers";

const App: React.FC = () => {
    const [state, dispatch] = useReducer(reducer, []);

    const { getCustomers, customers } = useAllCustomers();

    useEffect(() => {
        (async () => {
            const customerList = await getCustomerAPI();
            dispatch({
                type: FETCH_CUSTOMER,
                payload: customerList
            });
        })();
        getCustomers();
    }, [getCustomers]);


    return (
        <div className={"container"}>
            <CustomerForm dispatch={dispatch} />
            <CustomerRows state={customers}/>
        </div>
    );
}

export default App;