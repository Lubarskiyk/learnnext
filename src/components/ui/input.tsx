import { cn } from "@/utils/utils";
import {
  ForwardedRef,
  forwardRef,
  InputHTMLAttributes,
  ReactElement,
  useState,
} from "react";
import { Eye, EyeOff } from "lucide-react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  name: string;
  placeholder?: string;
  showToggle?: boolean;
  className?: string;
}

const Input = forwardRef(function Input(
  {
    type,
    name,
    placeholder,
    className,
    showToggle = false,
    ...props
  }: InputProps,
  ref: ForwardedRef<HTMLInputElement>
): ReactElement {
  const [showPassword, setShowPassword] = useState<boolean>(!showToggle);

  return (
    <div className="relative w-full">
      <input
        type={showToggle ? (showPassword ? "text" : "password") : type}
        name={name}
        placeholder={placeholder}
        className={cn(
          "my-2 w-full rounded-lg border border-[var(--foreground)]/10 bg-transparent px-4 py-2.5 text-base outline-none",
          className
        )}
        {...props}
        ref={ref}
      />
      {showToggle && (
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute inset-y-0 right-2 flex items-center"
        >
          {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
        </button>
      )}
    </div>
  );
});

Input.displayName = "Input";

export { Input };
