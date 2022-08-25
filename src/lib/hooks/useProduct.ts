import useSwr, { SWRResponse } from "swr";

const API_URL = "/api/product";

const useProduct = (id) => {
    const { data, error } = useSwr(`${API_URL}/${id}`);

    return {
        product: data !== undefined ? data.data.product : {},
        isLoading: !error && !data,
        error: error,
    };
};

export default useProduct;
