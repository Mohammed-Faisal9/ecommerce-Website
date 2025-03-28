"use client";

import { useActionState, useEffect } from "react";
import Button from "./Button";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { createUser } from "../actions/createUser";

export default function SignupForm() {
  const [state, formAction] = useActionState(createUser, {});

  const router = useRouter();

  useEffect(() => {
    if (state?.success) {
      toast.success("User created successfully");
      router.push("/");
    } else if (state?.error) {
      toast.error(state.error);
      console.log(state.error);
    }
  }, [state?.success, state?.error, router]);

  return (
    <form action={formAction}>
      <div className="mb-4">
        <label
          htmlFor="name"
          className="block mb-1 text-neutral-600 font-medium"
        >
          Name
        </label>
        <input
          type="name"
          name="name"
          id="name"
          className="border border-neutral-300 w-full py-[10px] px-3  rounded-md"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block mb-1 text-neutral-600 font-medium"
        >
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="border border-neutral-300 w-full py-[10px] px-3  rounded-md"
          required
        />
      </div>
      <div className="mb-8">
        <label
          htmlFor="password"
          className="block mb-1 text-neutral-600 font-medium"
        >
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          className="border border-neutral-300 w-full py-[10px] px-3  rounded-md"
          required
        />
      </div>
      <Button className="w-full">Create account</Button>
    </form>
  );
}
