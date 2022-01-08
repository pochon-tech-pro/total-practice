import React, {useReducer} from "react";
import CustomerForm from "./CustomerForm";
import CustomerRows from "./CustomerRows";
import reducer from "../reducers";

const App: React.FC = () => {
    const [state, dispatch] = useReducer(reducer, []);

    return (
        <div className={"container-fluid"}>
            <CustomerForm dispatch={dispatch} />
            <CustomerRows state={state}/>
        </div>
    );
}

export default App;