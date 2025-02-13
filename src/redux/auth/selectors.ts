import { RootState } from "@/redux/store";
import { User } from "firebase/auth";

export const selectUser = (state: RootState): User | null => state.auth.user;

export const selectUserIsLoading = (state: RootState): boolean =>
  state.auth.loading;

export const selectUserGetError = (state: RootState): string | null =>
  state.auth.error;
