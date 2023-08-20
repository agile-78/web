"use-client";

import { MouseEventHandler, ReactNode } from "react";

type Props = {
  type?: "button" | "submit" | "reset" | undefined;
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
};
export function Button({ children, type, onClick, className = "" }: Props) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-primary p-5 text-white w-full rounded-xl uppercase ${className}`}
    >
      {children}
    </button>
  );
}
