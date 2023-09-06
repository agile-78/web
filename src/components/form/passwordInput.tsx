"use client";

import { FormEvent, useState } from "react";
import { IInputProps, Input } from "../input";
export function PasswordInput({
  type,
  placeholder = "******",
  ...res
}: IInputProps) {
  const [isShow, setIsShow] = useState(false);

  function onToggle(e: FormEvent<HTMLButtonElement>) {
    setIsShow(!isShow);
  }
  return (
    <div className="relative">
      <Input
        placeholder={placeholder}
        {...res}
        type={isShow ? "text" : "password"}
      />
      <button
        onClick={onToggle}
        type="button"
        className="absolute top-1/2 right-0 -translate-y-1/3 -translate-x-1/2"
      >
        toggle
      </button>
    </div>
  );
}
