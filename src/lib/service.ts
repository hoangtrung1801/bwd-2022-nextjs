import { API_SERVER_URL } from "@/constant/env";
import fetcher from "@/lib/fetcher";

type CreateOrderBodyProps = {
    total: number;
    items: {
        productID: string;
        quantity: number;
    }[];
};
export const createOrder = async (body: CreateOrderBodyProps) => {
    if (body.items.length === 0)
        throw new Error("Không có gì trong giỏ hàng của bạn!");

    const API_URL = `${API_SERVER_URL}/api/orders`;

    const response = await fetcher(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    });

    if (response.status === "success") return response.data;
    throw new Error(response.message);
};
