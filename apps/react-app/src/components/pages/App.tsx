import React, {useEffect, useReducer} from "react";
import CustomerForm from "../organisms/CustomerForm";
import CustomerRows from "../organisms/CustomerRows";
import {useAllCustomers} from "../../hooks/useAllCustomers";

const App: React.FC = () => {
    const {getCustomers, customers} = useAllCustomers();
    useEffect(() => {
        getCustomers();
    }, [getCustomers]);

    return (
        <div className={"container"}>
            <CustomerForm/>
            <CustomerRows customers={customers}/>
        </div>
    );
}

export default App;