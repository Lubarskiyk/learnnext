import { configureStore } from "@reduxjs/toolkit";
import authReducer, { AuthState } from "./auth/slice";
import modalReducer, { IModalState } from "./toggleModal/slice";
import { authMiddleware } from "@/redux/auth/authMiddleware";

export interface RootState {
  auth: AuthState;
  modal: IModalState;
}

const store = configureStore({
  reducer: {
    auth: authReducer,
    modal: modalReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(authMiddleware as any),
});

export type AppDispatch = typeof store.dispatch;

export default store;
