"use client";

import Link from "next/link";
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";

export default function MobileHeader({ isAuthenticated}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative lg:hidden">
      <button onClick={() => setIsOpen(!isOpen)}>
        <IoMdMenu className="text-2xl" />
      </button>
      {isOpen && (
        <div className="absolute left-0 top-7 bg-white z-50 shadow-lg w-40 transition-all duration-300">
          <ul className="flex text-center py-3 text-neutral-500 flex-col">
            <li className=" border-b border-neutral-100 hover:bg-neutral-100 transition-all duration-300">
              <Link href="/" className="block p-2">
                Home
              </Link>
            </li>

            <li className=" border-b border-neutral-100 hover:bg-neutral-100 transition-all duration-300">
              <Link href="/categories" className="block p-2">
                Categories
              </Link>
            </li>
            {!isAuthenticated && (
              <>
                <li className=" border-b border-neutral-100 hover:bg-neutral-100 transition-all duration-300">
                  <Link href="/" className="block p-2">
                    Sign in
                  </Link>
                </li>
                <li className="hover:bg-neutral-100 transition-all duration-300">
                  <Link href="/" className="block p-2">
                    Sign up
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
