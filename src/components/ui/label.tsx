import { LabelHTMLAttributes, ReactElement, ReactNode } from "react";
import { cn } from "@/utils/utils";

interface ILabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  forId?: string;
  id?: string;
  text: string;
  className?: string;
  children?: ReactNode;
}
export default function Label({
  forId = "",
  id = "",
  text,
  className,
  children,
}: ILabelProps): ReactElement {
  return (
    <label
      htmlFor={forId}
      id={id}
      className={cn(
        "text-sm leading-[18px] font-medium text-[var(--color-label)]",
        className
      )}
    >
      {text} {children}
    </label>
  );
}
