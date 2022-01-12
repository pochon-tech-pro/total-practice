import React from "react";
import CustomerRow from "../molecules/CustomerRow";
import {CustomerState} from "../../reducers";

interface Props {
    state: CustomerState
}

const CustomerRows: React.VFC<Props> = ({state}) => {
    return (
        <React.Fragment>
            <h4>顧客一覧</h4>
            <table className={"table table-hover"}>
                <thead>
                <tr>
                    <th>顧客名</th>
                    <th>TEL</th>
                </tr>
                </thead>
                <tbody>
                {
                    state.map(
                        (customer, index) => <CustomerRow key={index} name={customer.name} tel={customer.tel}/>
                    )
                }
                </tbody>
            </table>

        </React.Fragment>
    );
}

export default CustomerRows;