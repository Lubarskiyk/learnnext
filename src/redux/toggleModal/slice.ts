import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IModalState {
  isLogIn: boolean;
  isSignUp: boolean;
  isSetting: boolean;
  isBooking: boolean;
}

const initialState: IModalState = {
  isLogIn: false,
  isSignUp: false,
  isSetting: false,
  isBooking: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<keyof IModalState>) => {
      state[action.payload] = true;
    },
    closeModal: (state, action: PayloadAction<keyof IModalState>) => {
      state[action.payload] = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
