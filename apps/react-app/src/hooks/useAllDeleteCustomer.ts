import {useCallback} from "react";
import axios from "axios";

type ResponseSchema = {
    isSuccess: boolean;
    message: string;
    body: string;
}

export const useAllDeleteCustomer = () => {
    const allDelete = useCallback(() => {
        axios.post<ResponseSchema>("http://localhost:3000/customer/all.delete")
            .then(_ => {
                window.location.reload();
            })
            .catch((e) => {
                console.log('エラーが発生しています', e);
            })
            .finally(() => {
            });
    }, []);

    return {allDelete};
}