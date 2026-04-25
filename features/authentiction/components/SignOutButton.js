"use client";

import { toast } from "react-toastify";
import { logoutUser } from "../actions/logoutUser";
import { HiLogout } from "react-icons/hi";

export default function SignOutButton() {
  async function handleLogout() {
    const { success, error } = await logoutUser();
    if (success) {
      toast.success("Logged out successfully");
    } else {
      console.log(error);
      toast.error("Something went wrong");
    }
  }

  return (
    <button
      onClick={handleLogout}
      className="hidden md:block text-gray-700 hover:text-black transition-colors"
    >
      <HiLogout className="w-5 h-5" />
    </button>
  );
}
