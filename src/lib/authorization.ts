import { API_SERVER_URL } from "@/constant/env";
import fetcher from "@/lib/fetcher";

const LOGIN_API_URL = `${API_SERVER_URL}/auth/login`;
const LOGOUT_API_URL = `${API_SERVER_URL}/auth/logout`;

export const loginUser = async (email: string, password: string) => {
    const response = await fetcher(LOGIN_API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
            email,
            password,
        }),
    });
    return response.status === "success";
};

export const logoutUser = async () => {
    const response = await fetcher(LOGOUT_API_URL, {
        method: "POST",
        credentials: "include",
    });
    return response.status === "success";
};
