import {create} from 'zustand'
import {persist} from "zustand/middleware";

export const authStore = create(
    persist(
        (set) => ({
            auth: {
                isAuthenticated: false,
                user: {
                    id: null,
                    email: null,
                    role: null,
                },
                token: null,
            },
            authenticate: (newUser, token) => set((state) => ({
                auth: {
                    ...state.auth,
                    isAuthenticated: true,
                    user: newUser,
                    token: token
                }
            })),
            logout: () => set({auth: {isAuthenticated: false, user: null, token: null}}),
        }),
        {
            name: 'user-storage',
        },
    ),
)
