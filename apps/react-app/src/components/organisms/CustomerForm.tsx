import React, {useState} from "react";
import PrimaryButton from "../atoms/PrimaryButton";
import {useRegisterCustomer} from "../../hooks/useRegisterCustomer";
import SecondaryButton from "../atoms/SecondaryButton";
import {useAllDeleteCustomer} from "../../hooks/useAllDeleteCustomer";

const HeaderInlineStyle = {
    color: "#8c2eff",
    margin: "8px 8px 8px 0",
}

const CustomerForm: React.FC = () => {
    const {register} = useRegisterCustomer();
    const {allDelete} = useAllDeleteCustomer();
    const [name, setName] = useState('');
    const [tel, setTel] = useState('');

    const changeName = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value);
    const changeTel = (e: React.ChangeEvent<HTMLInputElement>) => setTel(e.target.value);
    const createCustomer = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (unCreatable) {
            return false;
        }
        register(name, tel);
    }
    const allDeleteCustomer = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        if (window.confirm("全て削除しますか？")) {
            allDelete();
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
                    <PrimaryButton onClickHandler={createCustomer} disabled={unCreatable}>登録</PrimaryButton>
                    <SecondaryButton onClickHandler={allDeleteCustomer} disabled={false}>削除</SecondaryButton>
                </div>
            </form>
        </React.Fragment>
    );
}

export default CustomerForm;