import { HTMLInputTypeAttribute } from "react";

type Props = {
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  className?: string;
  name?: string;
};

export function Input({ name, type = "text", placeholder, className }: Props) {
  return (
    <input
      name={name}
      type={type}
      className={`w-full text-gray-500 px-3 py-2 border border-gray-400 rounded-lg ${className}`}
      placeholder={placeholder}
    />
  );
}
