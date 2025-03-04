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
  text,
  className,
  children,
  ...props
}: ILabelProps): ReactElement {
  return (
    <label
      className={cn(
        "text-sm leading-[18px] font-medium text-[var(--color-label)]",
        className
      )}
      {...props}
    >
      {text} {children}
    </label>
  );
}
