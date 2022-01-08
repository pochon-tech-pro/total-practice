import React from "react";
import {Customer} from "../type/customer";
import CustomerRow from "./CustomerRow";

interface Props {
    customers: Customer[]
}

const CustomerRows: React.VFC<Props> = props => {
    const {customers} = props;

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
                    customers.map(
                        (customer, index) => <CustomerRow key={index} name={customer.name} tel={customer.tel}/>
                    )
                }
                </tbody>
            </table>

        </React.Fragment>
    );
}

export default CustomerRows;