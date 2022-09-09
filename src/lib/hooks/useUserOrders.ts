import { API_SERVER_URL } from "@/constant/env";
import useSwr, { SWRResponse } from "swr";

const useUserOrders = (userID: string) => {
    const API_URL = `${API_SERVER_URL}/api/users/${userID}/orders`;
    const { data, error }: SWRResponse = useSwr(API_URL);

    return {
        orders: data !== undefined ? data.data : [],
        isLoading: !error && !data,
        // isLoading: true,
        error: error,
    };
};

export default useUserOrders;
