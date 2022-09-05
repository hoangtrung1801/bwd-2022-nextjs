import { DATABASE_URL } from "@/constant/env";
import useSwr, { SWRResponse } from "swr";

const API_URL = `${DATABASE_URL}/api/products`;

const useProducts = () => {
    const { data, error }: SWRResponse = useSwr(API_URL);

    return {
        products: data !== undefined ? data.data : [],
        isLoading: !error && !data,
        error: error,
    };
};

export default useProducts;
