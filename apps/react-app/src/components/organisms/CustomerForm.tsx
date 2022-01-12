import React, {useState} from "react";
import PrimaryButton from "../atoms/PrimaryButton";
import {getCustomerAPI, postCustomerAPI} from "../../api";
import {CustomerAction, FETCH_CUSTOMER} from "../../actions";

const HeaderInlineStyle = {
    color: "#8c2eff",
    margin: "8px 8px 8px 0",
}

interface Props {
    dispatch: React.Dispatch<CustomerAction>
}

const CustomerForm: React.FC<Props> = ({dispatch}) => {
    const [name, setName] = useState('');
    const [tel, setTel] = useState('');

    const changeName = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value);
    const changeTel = (e: React.ChangeEvent<HTMLInputElement>) => setTel(e.target.value);
    const createCustomer = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (unCreatable) {
            return false;
        }

        await postCustomerAPI({name, tel});
        const customerList = await getCustomerAPI();
        dispatch({
            type: FETCH_CUSTOMER,
            payload: customerList
        });

        setName('');
        setTel('');
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
                    <PrimaryButton onClickHandler={createCustomer} disabled={unCreatable}>登録</PrimaryButton>
                </div>
            </form>
        </React.Fragment>
    );
}

export default CustomerForm;