import React, {useState} from "react";
import PrimaryButton from "./PrimaryButton";
import {postCustomerAPI} from "../api";
import {CustomerAction} from "../reducers";

const HeaderInlineStyle = {
    color: "#8c2eff",
    margin: "8px 8px 8px 0",
}

interface Props {
    fetchCustomer: (dispatch: React.Dispatch<CustomerAction>) => Promise<void>
    dispatch: React.Dispatch<CustomerAction>
}
const CustomerForm: React.FC<Props> = ({fetchCustomer, dispatch}) => {
    const [name, setName] = useState('');
    const [tel, setTel] = useState('');

    const changeName = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value);
    const changeTel = (e: React.ChangeEvent<HTMLInputElement>) => setTel(e.target.value);
    const createCustomer = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (unCreatable) {
            return false;
        }

        const res = await postCustomerAPI({name, tel});
        if (res) {
            await fetchCustomer(dispatch);
            setName('');
            setTel('');
        }
    }

    const unCreatable = name === '' || tel === '';

    return (
        <React.Fragment>
            <h4 style={HeaderInlineStyle}>顧客登録</h4>
            <form className={""}>
                <div className={"form-group"}>
                    <label htmlFor={"customerName"}>顧客名</label>
                    <input id={"customerName"} type={"text"} value={name} className={"form-control"}
                           onChange={changeName}/>
                </div>
                <div className={"form-group"}>
                    <label htmlFor={"customerTel"}>TEL</label>
                    <input id={"customerTel"} type={"text"} value={tel} className={"form-control"}
                           onChange={changeTel}/>
                </div>
                <div className={"form-group"}>
                    <PrimaryButton name={'登録'} onClickHandler={createCustomer} disabled={unCreatable}/>
                </div>
            </form>
        </React.Fragment>
    );
}

export default CustomerForm;