import { onAuthStateChanged } from "firebase/auth";
import { setUser, setToken, logout } from "./slice";
import Cookies from "js-cookie";
import { auth } from "@/lib/firebase";
import { UserData } from "@/types/user";
import { Dispatch, MiddlewareAPI, Action } from "@reduxjs/toolkit";
import { RootState } from "@/redux/store";

export const authMiddleware = (
  store: MiddlewareAPI<Dispatch<Action>, RootState>
) => {
  let unsubscribe: () => void;

  const restoreAuthState = async () => {
    const token = Cookies.get("token");

    if (token) {
      await auth.authStateReady();
      const user = auth.currentUser;
      if (user) {
        const userData: UserData = {
          uid: user.uid,
          token,
          email: user.email,
          displayName: user.displayName,
        };
        store.dispatch(setUser(userData));
        store.dispatch(setToken(token));
      }
    }
  };

  restoreAuthState();

  return (next: Dispatch<Action>) => (action: Action) => {
    // Перевірка, чи дія пов'язана з аутентифікацією
    if (action.type.startsWith("auth/")) {
      if (!unsubscribe) {
        unsubscribe = onAuthStateChanged(auth, async user => {
          if (user) {
            const token = await user.getIdToken();
            const userData: UserData = {
              uid: user.uid,
              token,
              email: user.email,
              displayName: user.displayName,
            };
            Cookies.set("token", token, { expires: 7 });
            store.dispatch(setUser(userData));
            store.dispatch(setToken(token));
          } else {
            Cookies.remove("token");
            store.dispatch(logout());
          }
        });
      }
    }

    return next(action);
  };
};
