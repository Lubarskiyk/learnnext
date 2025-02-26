import { RootState } from "@/redux/store";

export const selectIsLogInOpen = (state: RootState) => state.modal.isLogIn;
export const selectIsSignUpOpen = (state: RootState) => state.modal.isSignUp;
export const selectIsSettingOpen = (state: RootState) => state.modal.isSetting;
export const selectIsBookingOpen = (state: RootState) => state.modal.isBooking;
