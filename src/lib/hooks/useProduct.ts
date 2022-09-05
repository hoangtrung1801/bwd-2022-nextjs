import { DATABASE_URL } from "@/constant/env";
import useSwr from "swr";

const API_URL = `${DATABASE_URL}/api/products`;

const useProduct = (id) => {
    const { data, error } = useSwr(`${API_URL}/${id}`);

    return {
        product: data !== undefined ? data.data : {},
        isLoading: !error && !data,
        error: error,
    };
};

export default useProduct;
