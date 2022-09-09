import { API_SERVER_URL } from "@/constant/env";
import useSwr from "swr";

const useOrder = (id) => {
    const API_URL = `${API_SERVER_URL}/api/orders/${id}`;
    const { data, error } = useSwr(API_URL);

    return {
        order: data !== undefined ? data.data : {},
        isLoading: !error && !data,
        error: error,
    };
};

export default useOrder;
