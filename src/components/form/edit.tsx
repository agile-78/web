"use client";

import { FormEvent } from "react";
import { Button } from "../button";
import { Input } from "../input";
import { PasswordInput } from "./passwordInput";
import { signOut, useSession } from "next-auth/react";
import { Session } from "next-auth";
import { editProfile, getUser } from "@/services/userService";

export function EditForm() {
  const { data: session, update } = useSession();

  const { user } = session as Session;

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    const body: {
      [key: string]: any;
    } = {};

    for (let key in data) {
      if (!data[key]) {
        continue;
      }
      if (
        // @ts-ignore
        data[key] == user[key] ||
        (key === "password" && data[key] === "******")
      ) {
        continue;
      } else {
        body[key] = data[key];
      }
    }

    await editProfile(user._id, body, session?.apiToken);
    await signOut();
  };

  return (
    <form className="mx-2" onSubmit={submitHandler}>
      <Input
        defaultValue={user.name}
        name="name"
        placeholder="Name"
        className="w-1/2 mr-2"
      />
      <Input
        defaultValue={user.email}
        name="email"
        placeholder="example@gmail.com"
        className="mt-4"
      />
      <PasswordInput name="password" className="mt-4" />
      <Button type="submit" className="mt-4">
        Done
      </Button>
    </form>
  );
}
