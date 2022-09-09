import { API_SERVER_URL } from "@/constant/env";
import useSwr from "swr";

const API_URL = `${API_SERVER_URL}/api/users`;

const useUsers = () => {
    const { data, error } = useSwr(`${API_URL}`);

    return {
        users: data !== undefined ? data.data : [],
        isLoading: !error && !data,
        error: error,
    };
};

export default useUsers;
