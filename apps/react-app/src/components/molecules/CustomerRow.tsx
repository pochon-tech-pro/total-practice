import React from "react";

interface Props {
    name: string
    tel: string
}

const CustomerRow: React.VFC<Props> = ({name, tel}) => {
    return (
        <tr>
            <td>{name}</td>
            <td>{tel}</td>
        </tr>
    );
}

export default CustomerRow;