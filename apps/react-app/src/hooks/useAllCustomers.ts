import {useCallback, useState} from "react";
import {Customer} from "../type/customer";
import axios from "axios";

type ResponseSchema = {
    isSuccess: boolean;
    message: string;
    body: { id: number; name: string; tel: string; }[];
}

export const useAllCustomers = () => {
    const [customers, setCustomers] = useState<Customer[]>([]);
    const [error, setError] = useState<boolean>(false);

    // 他のコンポーネントで参照するたびに再生成されないようにする
    const getCustomers = useCallback(() => {
        setError(false);
        axios.get<ResponseSchema>("http://localhost:3000/customer/all")
            .then(res => {
                const data: Customer[] = res.data.body.map(item => ({id: item.id, name: item.name, tel: item.tel}));
                setCustomers(data);
            })
            .catch((e) => {
                setError(true);
                console.log('エラーが発生しています', e);
            })
            .finally(() => {
            });
    }, []);

    return {getCustomers, customers, error};
}