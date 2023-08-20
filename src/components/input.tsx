import { HTMLInputTypeAttribute } from "react";

type Props = {
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  className?: string;
};

export function Input({ type = "text", placeholder, className }: Props) {
  return (
    <input
      type={type}
      className={`w-full text-gray-500 px-3 py-2 border border-gray-400 rounded-lg ${className}`}
      placeholder={placeholder}
    />
  );
}
