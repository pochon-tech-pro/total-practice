import React from "react";
import CustomerList from "./CustomerList";
import {Customer} from "../type/customer";

const sample: Customer[] = [
    {name: 'userA', tel: '03-0001-0001'},
    {name: 'userB', tel: '03-0002-0002'}
]

const App: React.VFC = () => {
    return (
        <React.Fragment>
            <CustomerList customers={sample}/>
        </React.Fragment>
    );
}

export default App;