import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

// Définir l'interface AuthState pour représenter l'état d'authentification
export interface AuthState {
  isAuthenticated: boolean;
  isAdmin: string | undefined;
  token: string | undefined;
  theme: 'light' | 'dark';
}

const initialState: AuthState = {
  isAuthenticated: !!Cookies.get("token"),
  isAdmin: Cookies.get("useradmin"),
  token: Cookies.get("token"),
  theme: (Cookies.get("theme") as 'light' | 'dark') || 'light',
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state: AuthState, action: PayloadAction<string>) => {
      state.isAuthenticated = true;
      state.isAdmin = Cookies.get("useradmin");
      state.token = action.payload;
    },
    logout: (state: AuthState) => {
      state.isAuthenticated = false;
      state.token = undefined;
      state.isAdmin = undefined;
      Cookies.remove("token");
      Cookies.remove("useradmin");
    },
    setTheme: (state: AuthState, action: PayloadAction<'light' | 'dark'>) => {
      state.theme = action.payload;
      Cookies.set("theme", action.payload);
    },
  },
});

export const { login, logout, setTheme } = authSlice.actions;
export const selectAuth = (state: { auth: AuthState }) => state.auth;
export const selectTheme = (state: { auth: AuthState }) => state.auth.theme;

export default authSlice.reducer;
