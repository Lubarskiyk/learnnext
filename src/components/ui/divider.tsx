import { JSX } from "react";
import { cn } from "@/utils/utils";

interface IDividerProps {
  className?: string;
}
export default function Divider({ className }: IDividerProps): JSX.Element {
  return <span className={cn("", className)}>|</span>;
}
