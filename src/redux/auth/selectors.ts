import { RootState } from "@/redux/store";
import { UserData } from "@/types/user";

export const selectUser = (state: RootState): UserData | null =>
  state.auth.user;

export const selectUserIsLoading = (state: RootState): boolean =>
  state.auth.loading;

export const selectUserGetError = (state: RootState): string | null =>
  state.auth.error;
