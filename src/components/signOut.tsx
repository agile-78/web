"use client";

import { signOut } from "next-auth/react";

export function SignOutButton() {
  return (
    <button className="text-2xl" onClick={() => signOut()}>
      sign out
    </button>
  );
}
