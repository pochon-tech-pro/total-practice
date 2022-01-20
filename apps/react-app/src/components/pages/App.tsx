import React, {useEffect} from "react";
import CustomerForm from "../organisms/CustomerForm";
import CustomerRows from "../organisms/CustomerRows";
import {useAllCustomers} from "../../hooks/useAllCustomers";
import {API_TYPE} from "../../api";

const App: React.FC = () => {
    const {getCustomers, customers} = useAllCustomers(API_TYPE.GO_ECHO_API);
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