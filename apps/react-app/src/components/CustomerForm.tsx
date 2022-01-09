import React, {useState} from "react";
import {CustomerAction} from "../reducers";
import PrimaryButton from "./PrimaryButton";

interface Props {
    dispatch: React.Dispatch<CustomerAction>
}

const CustomerForm: React.FC<Props> = ({dispatch}) => {
    const [name, setName] = useState('');
    const [tel, setTel] = useState('');

    const changeName = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value);
    const changeTel = (e: React.ChangeEvent<HTMLInputElement>) => setTel(e.target.value);
    const submitCustomer = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const action: CustomerAction = {
            type: 'CREATE_CUSTOMER',
            payload: {name, tel}
        }
        dispatch(action);

        setName('');
        setTel('');
    }

    return (
        <React.Fragment>
            <h4>顧客登録</h4>
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
                    <PrimaryButton name={'登録'} onClickHandler={submitCustomer}/>
                </div>
            </form>
        </React.Fragment>
    );
}

export default CustomerForm;