import {Customer} from "../type/customer";

export const getCustomerAPI = async (): Promise<Customer[]> => {
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
}

export const postCustomerAPI = async ({name, tel}: { name: string, tel: string }): Promise<boolean> => {
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

    return data.isSuccess;
}