import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from "@/lib/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  User,
} from "firebase/auth";

interface AuthCredentials {
  email: string;
  password: string;
}

export const signUp = createAsyncThunk<
  User,
  AuthCredentials,
  { rejectValue: string }
>("auth/signUp", async ({ email, password }, { rejectWithValue }) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential.user;
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});

export const signIn = createAsyncThunk<
  User,
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
      return userCredential.user;
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
