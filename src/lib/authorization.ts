import { API_SERVER_URL } from "@/constant/env";
import fetcher from "@/lib/fetcher";

const LOGIN_API_URL = `${API_SERVER_URL}/auth/login`;
const LOGOUT_API_URL = `${API_SERVER_URL}/auth/logout`;
const SIGNUP_API_URL = `${API_SERVER_URL}/auth/signup`;

export const loginUser = async (email: string, password: string) => {
    const response = await fetcher(LOGIN_API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
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
    });
    return response.status === "success";
};

export const signupUser = async (
    email: string,
    firstName: string,
    lastName: string,
    password: string
) => {
    const response = await fetcher(SIGNUP_API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email,
            firstName,
            lastName,
            password,
            // need to update
            phone: "",
            address: {
                addressLine: "",
                city: "",
                country: "",
                phone: "",
            },
        }),
    });

    if (response.status === "success") return response.data;
    throw new Error(response.message);
};
