import React, {useEffect, useReducer} from "react";
import CustomerForm from "./CustomerForm";
import CustomerRows from "./CustomerRows";
import reducer from "../reducers";

const getCustomerAPI = async () => {
    try {
        const res = await fetch("http://localhost:3000/customer?tel=03-1111-2222");
        const data = await res.json();
        console.log(data);
    } catch (e) {
        console.log(e)
    }
}

const App: React.FC = () => {
    const [state, dispatch] = useReducer(reducer, []);

    useEffect(() => {
        (async () => await getCustomerAPI())();
    }, []);

    return (
        <div className={"container"}>
            <CustomerForm dispatch={dispatch} />
            <CustomerRows state={state}/>
        </div>
    );
}

export default App;