import { create } from "zustand";
import axios from "../utils/axios.ts";
import toast from "react-hot-toast";

type User = {
    id: string;
    name: string;
    mobile: string;
} | null

type RegisterParam = {
    name: string,
    mobile: string,
    password: string
}

type UserStore = {
    user: User;
    loading: boolean;
    checkingAuth: boolean;
    register: (params: RegisterParam) => Promise<void>;
    login: () => Promise<void>;
    logout: () => Promise<void>;
}

export const useUserStore = create<UserStore>((set, get) => ({
    user: null,
    loading: false,
    checkingAuth: true,

    register: async ({ name, mobile, password }: RegisterParam) => {
        set({ loading: true })

        try {
            const res = await axios.post("/auth/register", { name, mobile, password })
            set({ user: res.data.user, loading: false })
        } catch (error: any) {
            set({ loading: false })
            toast.error(error.message)
        }
    },

    login: async () => {

    },

    logout: async () => {

    }
}))