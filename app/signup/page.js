// "use client";

import IntroSection from "../../components/IntroSection";
import Wrapper from "../../components/wrapper";

import { FcGoogle } from "react-icons/fc";
import Button from "../../components/Button";
import Link from "next/link";
import SignupForm from "../../components/SignupForm";

export default function page() {
  return (
    <div>
      <IntroSection title="Sign up" />
      <section className="py-32">
        <Wrapper>
          <div className="max-w-80 mx-auto">
            <form action="">
              <button className="flex items-center gap-6 text-lg border border-primary-300 px-10 py-4 font-medium">
                <FcGoogle className="text-2xl" />
                <span className="text-slate-500">Continue with Google</span>
              </button>
            </form>
            <div className="border border-neutral-300 my-12 relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white px-4 text-sm text-neutral-500">
                OR
              </span>
            </div>
            <SignupForm />
            <div className="text-center mt-8 text-neutral-500">
              <span className="text-sm ">Already have an account? </span>
              <Link
                href="/signin"
                className="text-sm hover:text-black hover:underline"
              >
                Sign In
              </Link>
            </div>
          </div>
        </Wrapper>
      </section>
    </div>
  );
}
