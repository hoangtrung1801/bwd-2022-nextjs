import { API_SERVER_URL } from "@/constant/env";
import useSwr, { SWRResponse } from "swr";

const API_URL = `${API_SERVER_URL}/api/products`;

const useProducts = () => {
    const { data, error }: SWRResponse = useSwr(API_URL);

    return {
        products: data !== undefined ? data.data : [],
        isLoading: !error && !data,
        // isLoading: true,
        error: error,
    };
};

export default useProducts;
