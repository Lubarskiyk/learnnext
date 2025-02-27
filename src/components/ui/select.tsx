"use client";
import { cn } from "@/utils/utils";
import { ReactElement, SelectHTMLAttributes } from "react";
import { ChevronDown } from "lucide-react";

interface ISelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  options: string[];
  id?: string;
  className?: string;
}

export default function Select({
  name,
  id = "",
  options,
  className,
  ...props
}: ISelectProps): ReactElement {
  return (
    <div className="relative inline-block">
      <select
        name={name}
        id={id}
        {...props}
        className={cn(
          "w-full min-w-28 appearance-none rounded-xl bg-[var(--background)] p-4 text-lg leading-5 font-medium text-[var(--foreground)]",
          className
        )}
        {...props}
      >
        {options.map(option => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
        <ChevronDown color="var(--foreground)" />
      </div>
    </div>
  );
}
