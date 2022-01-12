import {Customer} from "../type/customer";

export const getCustomerAPI = async (): Promise<Customer[]> => {
    try {
        const res = await fetch("http://localhost:3000/customer/all");
        const data = await res.json() as {
            isSuccess: boolean
            message: string
            body: { id: number; name: string; tel: string; }[]
        };
        return data.body.map(item => ({
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
        const res = await fetch("http://localhost:3000/customer/", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({name, tel}),
        });
        const data = await res.json() as {
            isSuccess: boolean
            message: string
            body: string
        };
        if (!data.isSuccess) {
            alert(data.message);
        }
    } catch (e) {
        console.log('不明なエラーが発生しています', e);
    }
}