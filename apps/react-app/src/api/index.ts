import axios from "axios";

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