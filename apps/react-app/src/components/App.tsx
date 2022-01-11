import React, {useEffect, useReducer} from "react";
import CustomerForm from "./CustomerForm";
import CustomerRows from "./CustomerRows";
import reducer, {CustomerAction} from "../reducers";
import {FETCH_CUSTOMER} from "../actions";
import {Customer} from "../type/customer";

const getCustomerListAPI = async (dispatch: React.Dispatch<CustomerAction>) => {
    try {
        const res = await fetch("http://localhost:3000/customer/all");
        const data = await res.json() as {
            isSuccess: boolean
            message: string
            body: { id: number; name: string; tel: string; }[]
        };
        const payload: Customer[] = data.body.map(item => ({
            name: item.name,
            tel: item.tel
        }))
        dispatch({
            type: FETCH_CUSTOMER,
            payload: payload
        });
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
            <CustomerForm />
            <CustomerRows state={state}/>
        </div>
    );
}

export default App;