import React, {useEffect, useReducer} from "react";
import CustomerForm from "../organisms/CustomerForm";
import CustomerRows from "../organisms/CustomerRows";
import reducer from "../../reducers";
import {useAllCustomers} from "../../hooks/useAllCustomers";

const App: React.FC = () => {
    const [state, dispatch] = useReducer(reducer, []);

    const { getCustomers, customers } = useAllCustomers();
    useEffect(() => {
        getCustomers();
    }, [getCustomers]);

    return (
        <div className={"container"}>
            <CustomerForm dispatch={dispatch} />
            <CustomerRows customers={customers}/>
        </div>
    );
}

export default App;