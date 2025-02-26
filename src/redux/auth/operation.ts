import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from "@/lib/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { UserData } from "@/types/user";
import Cookies from "js-cookie";

interface AuthCredentials {
  email: string;
  password: string;
  displayName?: string;
}

export const signUp = createAsyncThunk<
  UserData,
  AuthCredentials,
  { rejectValue: string }
>(
  "auth/signUp",
  async (
    { email, password, displayName }: AuthCredentials,
    { rejectWithValue }
  ) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      await updateProfile(user, { displayName });

      const token = await user.getIdToken();
      Cookies.set("token", token, { expires: 7 });

      return {
        uid: user.uid,
        token: token,
        email: user.email,
        displayName: user.displayName,
      };
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const signIn = createAsyncThunk<
  UserData,
  AuthCredentials,
  { rejectValue: string }
>(
  "auth/signIn",
  async (
    { email, password }: { email: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      const token = await user.getIdToken();
      Cookies.set("token", token, { expires: 7 });
      return {
        uid: user.uid,
        token: token,
        email: user.email,
        displayName: user.displayName,
      };
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const signOutUser = createAsyncThunk<void, void>(
  "auth/signOut",

  async () => {
    await signOut(auth);
  }
);
