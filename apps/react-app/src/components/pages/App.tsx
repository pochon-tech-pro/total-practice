import React from "react";
import Customer from "./Customer";
import Login from "./Login";

const App: React.FC = () => {
    return (
        <React.Fragment>
            <Customer/>
            <Login/>
        </React.Fragment>
    );
}

export default App;