import React, {useEffect, useReducer} from "react";
import CustomerForm from "./CustomerForm";
import CustomerRows from "./CustomerRows";
import reducer from "../reducers";
import {FETCH_CUSTOMER} from "../actions";
import {getCustomerAPI} from "../api";

const App: React.FC = () => {
    const [state, dispatch] = useReducer(reducer, []);

    useEffect(() => {
        (async () => {
            const customerList = await getCustomerAPI();
            dispatch({
                type: FETCH_CUSTOMER,
                payload: customerList
            });
        })();
    }, []);

    return (
        <div className={"container"}>
            <CustomerForm dispatch={dispatch} />
            <CustomerRows state={state}/>
        </div>
    );
}

export default App;