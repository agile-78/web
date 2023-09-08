"use client";

import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { register } from "@/services/authService";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

import { useState } from "react";

export function SignupForm() {
  interface data {
    email: string;
    password: string;
  }

  const router = useRouter();

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    const isValid = validateForm();
    if (isValid) {
      try {
        await register(data as unknown as any);
        router.push("/auth/login");
      } catch (error) {
        console.error("Authentication failed:", error);
      }
    } else {
      // Handle form validation errors, display messages, etc.
    }

  };
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
    } else if (!isValidPassword()) {
      newErrors.password = "Password requires an least 8 characters.";
    }
    setErrors(newErrors);

    // Check if there are any validation errors
    return Object.values(newErrors).every((error) => error === "");
  }
  const isValidEmail = () => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(formData.email);
  };
  const isValidPassword = () => {
    const passwordPattern = /^.{8,}$/;
    return passwordPattern.test(formData.password);
  };
  return (
    <form className="mx-2" onSubmit={submitHandler}>
      <Input 
        name="name" 
        placeholder="Name" 
        className="mt-4" 
      />
      <Input 
        name="email" 
        placeholder="Email address" 
        className="mt-4" 
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      {errors.email && <div className="text-red-500">{errors.email}</div>}
      <Input 
        name="password" 
        placeholder="Password" 
        className="mt-4" 
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />
      {errors.password && <div className="text-red-500">{errors.password}</div>}
      <Input placeholder="Referral Code" className="mt-4 mb-4" />
      <Link href="/auth/login">Already have an account?</Link>

      <Button className="mt-5">Sign up</Button>
    </form>
  );
}
