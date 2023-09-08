import { HTMLInputTypeAttribute } from "react";

export interface IInputProps {
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  className?: string;
  name?: string;
  defaultValue?: string;
  value?:string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export function Input({
  name,
  type = "text",
  placeholder,
  className,
  defaultValue,
  value,
  onChange,
}: IInputProps) {
  return (
    <input
      defaultValue={defaultValue}
      name={name}
      type={type}
      className={`w-full text-gray-500 px-3 py-2 border border-gray-400 rounded-lg ${className}`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}
