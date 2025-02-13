"use client";

import { ReactNode } from "react";
import ReduxProvider from "./ReduxProvider";

interface ProvidersProps {
  children: ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return <ReduxProvider>{children}</ReduxProvider>;
}
