"use client";

import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { register } from "@/services/authService";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

export function SignupForm() {
  const router = useRouter();

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    try {
      await register(data as unknown as any);
      router.push("/auth/login");
    } catch {}
  };
  return (
    <form className="mx-2" onSubmit={submitHandler}>
      <Input name="name" placeholder="name" className="mt-4" />
      <Input name="email" placeholder="Email address" className="mt-4" />
      <Input name="password" placeholder="Password" className="mt-4" />
      <Input placeholder="Referal Code" className="mt-4 mb-4" />
      <Link href="/auth/login">Already have an account?</Link>

      <Button className="mt-5">Sign up</Button>
    </form>
  );
}
