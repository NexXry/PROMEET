import { create } from 'zustand'
import {persist} from "zustand/middleware";

export const authStore =  create(
    persist(
        (set, get) => ({
            auth: {
                isAuthenticated: false,
                user: {
                    id: null,
                    email: null,
                    role: null,
                },
                token: null,
            },
            authenticate: (token) => set({ auth: { isAuthenticated: true }, token: token }),
            logout: () => set({ auth: { isAuthenticated: false, user: null }, token: null }),
        }),
        {
            name: 'user-storage',
        },
    ),
)
