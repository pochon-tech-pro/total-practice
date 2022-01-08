import React from "react";
import CustomerRows from "./CustomerRows";
import {Customer} from "../type/customer";

const sample: Customer[] = [
    {name: 'userA', tel: '03-0001-0001'},
    {name: 'userB', tel: '03-0002-0002'}
]

const App: React.VFC = () => {
    return (
        <div className={"container-fluid"}>
            <CustomerRows customers={sample}/>
        </div>
    );
}

export default App;