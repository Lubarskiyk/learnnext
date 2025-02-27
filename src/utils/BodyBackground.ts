"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function BodyBackground() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;

    switch (pathname) {
      case "/teachers":
        root.style.setProperty("--body-bg", "var(--background-secondary)");
        break;
      default:
        root.style.setProperty("--body-bg", "var(--background)");
        break;
    }
  }, [pathname]);

  return null;
}
