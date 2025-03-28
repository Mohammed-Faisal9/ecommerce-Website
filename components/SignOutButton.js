"use client";

import { FaSignOutAlt } from "react-icons/fa";
import { toast } from "react-toastify";
import { logoutUser } from "../actions/logoutUser";

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
    <button onClick={handleLogout}>
      <FaSignOutAlt className="text-slate-500 hover:text-black" />
    </button>
  );
}
