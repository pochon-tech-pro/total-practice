import React, {useEffect, useReducer} from "react";
import CustomerForm from "./CustomerForm";
import CustomerRows from "./CustomerRows";
import reducer, {CustomerAction} from "../reducers";
import {CREATE_CUSTOMER} from "../actions";

const getCustomerListAPI = async (dispatch: React.Dispatch<CustomerAction>) => {
    try {
        const res = await fetch("http://localhost:3000/customer/all");
        const data = await res.json() as {
            isSuccess: boolean
            message: string
            body: { id: number; name: string; tel: string; }[]
        };
        data.body.forEach((customer) => {
            dispatch({
                type: CREATE_CUSTOMER,
                payload: {name: customer.name, tel: customer.tel}
            })
        });

        console.log(data);
    } catch (e) {
        console.log(e)
    }
}

const App: React.FC = () => {
    const [state, dispatch] = useReducer(reducer, []);

    useEffect(() => {
        (async () => await getCustomerListAPI(dispatch))();
    }, []);

    return (
        <div className={"container"}>
            <CustomerForm dispatch={dispatch}/>
            <CustomerRows state={state}/>
        </div>
    );
}

export default App;