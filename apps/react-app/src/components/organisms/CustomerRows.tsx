import React from "react";
import CustomerRow from "../molecules/CustomerRow";
import {Customer} from "../../type/customer";

interface Props {
    customers: Customer[]
}

const CustomerRows: React.VFC<Props> = ({customers}) => {
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