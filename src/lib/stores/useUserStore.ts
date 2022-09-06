import { API_SERVER_URL } from "@/constant/env";
import fetcher from "@/lib/fetcher";
import separateCookie from "@/lib/seperateCookie";
import { User } from "@/lib/types";
import create from "zustand";

export interface UserStoreState {
    user: User | null;
    fetch: () => Promise<void>;
}

const API_URL = `${API_SERVER_URL}/auth/user`;

const useUserStore = create<UserStoreState>((set, get) => ({
    user: null,
    fetch: async () => {
        const response = await fetcher(`${API_URL}`);
        if (response.status === "failed") return;
        const { email, firstName, id, lastName, address }: User = response.data;
        set({
            user: {
                email,
                firstName,
                id,
                lastName,
                address,
            },
        });
    },
}));

export default useUserStore;
