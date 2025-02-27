"use client";

import Link from "next/link";
import ReactCountryFlag from "react-country-flag";
import Button from "@/components/ui/button";
import { LogIn, LogOut } from "lucide-react";
import Modal from "@/components/modal/Modal";
import LogInForm from "@/components/LogIn";
import SignUpForm from "@/components/SingUp";
import { selectUser } from "@/redux/auth/selectors";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { signOutUser } from "@/redux/auth/operation";
import {
  selectIsLogInOpen,
  selectIsSignUpOpen,
} from "@/redux/toggleModal/selectors";
import { closeModal, openModal } from "@/redux/toggleModal/slice";

const useAppDispatch: () => AppDispatch = useDispatch;

export default function Header() {
  const dispatch = useAppDispatch();
  const user = useSelector(selectUser);
  const isLogInOpen = useSelector(selectIsLogInOpen);
  const isSingUpOpen = useSelector(selectIsSignUpOpen);
  return (
    <header className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-32 py-5 text-base">
      <Link className="flex items-center gap-2" href="#">
        <div className="h-7 w-7 overflow-hidden rounded-full">
          <ReactCountryFlag
            countryCode="UA"
            style={{
              width: "2rem",
              height: "2rem",
              objectFit: "cover",
              objectPosition: "center",
            }}
            svg
          />
        </div>
        <p className="text-xl font-medium">LearnLingo</p>
      </Link>

      <nav className="flex items-center gap-7">
        <Link className="py-1 text-base leading-[1.25]" href="/">
          Home
        </Link>
        <Link className="py-1 text-base leading-[1.25]" href="/teachers">
          Teachers
        </Link>
      </nav>
      {!user ? (
        <ul className="flex items-center gap-4">
          <li key="Login">
            <Button
              variant="iconText"
              className="group"
              onClick={() => dispatch(openModal("isLogIn"))}
            >
              <LogIn
                className="stroke-[var(--primary)] group-hover:stroke-[var(--secondary)]"
                size="20"
              />
              <span>Log in</span>
            </Button>
          </li>
          <li key="Registration">
            <Button
              variant="black"
              className="font-bold text-white"
              onClick={() => dispatch(openModal("isSignUp"))}
            >
              Registration
            </Button>
          </li>
        </ul>
      ) : (
        <ul className="flex items-center gap-4">
          <li key="Login">
            <Button
              variant="iconText"
              className="group"
              onClick={() => {
                dispatch(signOutUser());
              }}
            >
              <LogOut
                className="stroke-[var(--primary)] group-hover:stroke-[var(--secondary)]"
                size="20"
              />
              <span>Log out</span>
            </Button>
          </li>
          <li key="Registration">
            <Button
              variant="black"
              className="font-bold text-white"
              onClick={() => alert("привіт")}
            >
              {user.displayName}
            </Button>
          </li>
        </ul>
      )}
      {isLogInOpen && (
        <Modal
          isOpen={isLogInOpen}
          onClose={() => dispatch(closeModal("isLogIn"))}
        >
          <LogInForm />
        </Modal>
      )}
      {isSingUpOpen && (
        <Modal
          isOpen={isSingUpOpen}
          onClose={() => dispatch(closeModal("isSignUp"))}
        >
          <SignUpForm />
        </Modal>
      )}
    </header>
  );
}
