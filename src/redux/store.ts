import { configureStore, Middleware } from "@reduxjs/toolkit";
import authReducer, { AuthState } from "./auth/slice";
import modalReducer, { IModalState } from "./toggleModal/slice";
import { authMiddleware } from "@/redux/auth/authMiddleware";

export interface RootState {
  auth: AuthState;
  modal: IModalState;
}
const typedAuthMiddleware = authMiddleware as Middleware;
const store = configureStore({
  reducer: {
    auth: authReducer,
    modal: modalReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(typedAuthMiddleware),
});

export type AppDispatch = typeof store.dispatch;

export default store;
