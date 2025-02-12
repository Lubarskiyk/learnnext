import { cn } from "@/utils/utils";
import {
  ForwardedRef,
  forwardRef,
  InputHTMLAttributes,
  ReactElement,
} from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  name: string;
  placeholder: string;
  className?: string;
}

const Input = forwardRef(function Input(
  { type, name, placeholder, className, ...props }: InputProps,
  ref: ForwardedRef<HTMLInputElement>
): ReactElement {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className={cn(
        "my-2 w-full rounded-lg bg-zinc-100 px-4 py-2.5 text-base outline-none",
        className
      )}
      {...props}
      ref={ref}
    />
  );
});

Input.displayName = "Input";

export { Input };
