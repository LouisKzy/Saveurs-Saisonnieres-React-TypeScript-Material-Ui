import { configureStore } from "@reduxjs/toolkit";
import authReducer, { AuthState } from "../features/authSlice";
import { useDispatch } from "react-redux";

// Définir le type de l'état global de Redux
export interface RootState {
  auth: AuthState;
}

// Configurer le store Redux
const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;

// Types pour utiliser le dispatch et les thunks
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
