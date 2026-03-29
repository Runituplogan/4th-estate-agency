import { create, StateCreator } from "zustand";
import { persist } from "zustand/middleware";

export type AuthState = {
  token?: string;
  refreshToken?: string;
  user?: User;
};

export type AuthActions = {
  setToken: (authToken: string) => void;
  setRefreshToken: (token: string) => void;
  clearAuth: () => void;
  setUser: (user: User) => void;
};

const initializer: StateCreator<AuthState & AuthActions> = (set) => ({
  setToken: (authToken: string) => {
    set({ token: authToken });
  },
  setRefreshToken: (token: string) => set({ refreshToken: token }),

  clearAuth: () => {
    set({
      token: undefined,
      refreshToken: undefined,
      user: undefined,
    });
  },
  setUser: (user: User) => {
    set({ user });
  },
});

const persistedAuthState = persist<AuthState & AuthActions>(initializer, {
  name: "auth",
});

export const useAuthState = create<
  AuthState & AuthActions,
  [["zustand/persist", AuthState & AuthActions]]
>(persistedAuthState);
