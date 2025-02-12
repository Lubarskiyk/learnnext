"use client";

import Link from "next/link";
import ReactCountryFlag from "react-country-flag";
import Button from "@/components/ui/button";
import { LogIn } from "lucide-react";
import { useState } from "react";
import Modal from "@/components/modal/Modal";
import LogInForm from "@/components/LogIn";
import SignUpForm from "@/components/SingUp";

export default function Header() {
  const [isLogInOpen, setLogInOpen] = useState(false);
  const [isSingUpOpen, setSingUpOpen] = useState(false);
  return (
    <header className="px- mx-auto flex w-full max-w-[1440px] items-center justify-between px-32 py-5 text-base">
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
        <Link className="py-1 text-base leading-[1.25]" href="#">
          Home
        </Link>
        <Link className="py-1 text-base leading-[1.25]" href="#">
          Teachers
        </Link>
      </nav>
      <ul className="flex items-center gap-4">
        <li key="Login">
          <Button
            variant="iconText"
            className="group"
            onClick={() => setLogInOpen(true)}
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
            onClick={() => setSingUpOpen(true)}
          >
            Registration
          </Button>
        </li>
      </ul>
      {isLogInOpen && (
        <Modal isOpen={isLogInOpen} onClose={() => setLogInOpen(false)}>
          <LogInForm />
        </Modal>
      )}
      {isSingUpOpen && (
        <Modal isOpen={isSingUpOpen} onClose={() => setSingUpOpen(false)}>
          <SignUpForm />
        </Modal>
      )}
    </header>
  );
}
