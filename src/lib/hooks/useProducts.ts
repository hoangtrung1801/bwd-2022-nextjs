import useSwr, { SWRResponse } from "swr";

const API_URL = "/api/products";

const useProducts = () => {
    const { data, error } = useSwr(API_URL);

    return {
        products: data !== undefined ? data.data.products : [],
        isLoading: !error && !data,
        error: error,
    };
};

export default useProducts;
