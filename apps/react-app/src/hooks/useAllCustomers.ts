import {useCallback, useState} from "react";
import {Customer} from "../type/customer";
import axios from "axios";
import {API_TYPE, apiURL} from "../api";

type ResponseSchema = {
    isSuccess: boolean;
    message: string;
    body: { id: number; name: string; tel: string; }[];
}

export const useAllCustomers = (apiType: API_TYPE) => {
    const [customers, setCustomers] = useState<Customer[]>([]);
    const [error, setError] = useState<boolean>(false);

    // 他のコンポーネントで参照するたびに再生成されないようにする
    const getCustomers = useCallback(() => {
        setError(false);
        const uri = apiURL(apiType);
        axios.get<ResponseSchema>(`${uri}/customer/all`)
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
    }, [apiType]);

    return {getCustomers, customers, error};
}