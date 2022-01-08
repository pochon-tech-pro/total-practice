import React from "react";
import {Customer} from "../type/customer";

interface Props {
    customers: Customer[]
}

const CustomerList: React.VFC<Props> = props => {
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
                {customers.map(customer => {
                    return (
                        <tr>
                            <td>{customer.name}</td>
                            <td>{customer.tel}</td>
                        </tr>
                    );
                })}
                </tbody>
            </table>

        </React.Fragment>
    );
}

export default CustomerList;