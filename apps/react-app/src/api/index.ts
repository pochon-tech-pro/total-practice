import {Customer} from "../type/customer";
import axios from "axios";

export const getCustomerAPI = async (): Promise<Customer[]> => {
    try {
        const res = await axios.get<{
            isSuccess: boolean;
            message: string;
            body: { id: number; name: string; tel: string; }[];
        }>("http://localhost:3000/customer/all");

        return res.data.body.map(item => ({
            name: item.name,
            tel: item.tel
        }));
    } catch (e) {
        console.log('不明なエラーが発生しています', e);
        return [];
    }
}

export const postCustomerAPI = async ({name, tel}: { name: string, tel: string }): Promise<void> => {
    try {
        const res = await axios.post<{
            isSuccess: boolean;
            message: string;
            body: string;
        }>("http://localhost:3000/customer/", {name, tel})

        if (!res.data.isSuccess) {
            alert(res.data.message);
        }
    } catch (e) {
        console.log('不明なエラーが発生しています', e);
    }
}