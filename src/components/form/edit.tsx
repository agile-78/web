"use client";

import { FormEvent } from "react";
import { Button } from "../button";
import { Input } from "../input";

export function EditForm() {
  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form className="mx-2">
      <div className="flex">
        <Input placeholder="Name" className="w-1/2 mr-2" />
        <Input placeholder="Surname" className="w-1/2 ml-2" />
      </div>
      <Input placeholder="Username" className="mt-4" />
      <Input placeholder="Email address" className="mt-4 mb-4" />
      <Button type="submit" className="mt-4">
        Done
      </Button>
    </form>
  );
}
