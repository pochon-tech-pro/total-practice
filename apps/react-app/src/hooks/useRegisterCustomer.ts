import {useCallback, useState} from "react";
import axios from "axios";

type ResponseSchema = {
    isSuccess: boolean;
    message: string;
    body: string;
}
export const useRegisterCustomer = () => {
    const [error, setError] = useState<boolean>(false);

    const register = useCallback((name: string, tel: string) => {
        axios.post<ResponseSchema>("http://localhost:3000/customer/", {name, tel})
            .then((_) => {
                window.location.reload();
            })
            .catch((e) => {
                setError(true);
                console.log('エラーが発生しています', e);
            })
            .finally(() => {
            });

    }, []);

    return {register, error}
}