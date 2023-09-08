"use client";
import { Button } from "@/components/button";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { FormEvent } from "react";

import { useState } from "react";

export function LoginForm() {
  interface data {
    email: string;
    password: string;
  }

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";
  const submitHandler = async (val:data) => {
    const isValid = validateForm();
    if (isValid) {
      try {
        // Call signIn if form data is valid
        await signIn("credentials", {
          ...val,
          callbackUrl,
        });
      } catch (error) {
        console.error("Authentication failed:", error);
      }
    }
  };

//Validating
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const validateForm = () => {
    const newErrors = {
      email: "",
      password: "",
    };
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!isValidEmail()) {
      newErrors.email = "Invalid email format.";
    }
    if (!formData.password) {
      newErrors.password = "Password is required.";
    }
    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === "");
  }
  const isValidEmail = () => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(formData.email);
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
        className="w-[100%] text-gray-500 px-3 py-2 border border-gray-400 rounded-lg my-5"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      {errors.email && <div className="text-red-500">{errors.email}</div>}
      <input
        type="password"
        name="password"
        className="w-[100%] text-gray-500 px-3 py-2 border border-gray-400 rounded-lg mb-5"
        placeholder="Password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />
      {errors.password && <div className="text-red-500">{errors.password}</div>}
      <Link className="block mb-4" href="/auth/signup">
        Don&apos;t have an account? Sign up
      </Link>

      <Button>Sign In</Button>
    </form>
  );
}
