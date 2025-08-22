'use client';

import { signOut } from "next-auth/react";

export default function SignOutButton() {
  return (
    <button
      onClick={() => signOut({ callbackUrl: "/" })}
      className="rounded-xl px-3 py-2 text-sm font-medium hover:bg-gray-100"
    >
      Sign out
    </button>
  );
}