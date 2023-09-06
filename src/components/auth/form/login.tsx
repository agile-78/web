"use client";
import { Button } from "@/components/button";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { FormEvent } from "react";

export function LoginForm() {
  interface data {
    email: string;
    password: string;
  }

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || undefined;
  const submitHandler = async (val: data) => {
    await signIn("credentials", {
      ...val,
      callbackUrl,
    });
  };

  return (
    <form
      onSubmit={async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const formProps = Object.fromEntries(formData);
        await submitHandler(formProps as unknown as data);
      }}
    >
      <input
        type="text"
        name="email"
        className="text-gray-500 px-3 py-2 border border-gray-400 rounded-lg my-5"
        placeholder="Email"
      />
      <input
        type="password"
        name="password"
        className="text-gray-500 px-3 py-2 border border-gray-400 rounded-lg mb-5"
        placeholder="Password"
      />
      <Button>Sign In</Button>
    </form>
  );
}
