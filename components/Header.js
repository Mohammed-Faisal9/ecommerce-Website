"use client";

import Link from "next/link";
import Wrapper from "./Wrapper";

import Image from "next/image";

import { checkAuth } from "../lib/checkAuth";
import Cart from "../features/cart/components/Cart";

import SignOutButton from "../features/authentiction/components/SignOutButton";
import {
  HiLogout,
  HiOutlineMenu,
  HiOutlineSearch,
  HiOutlineShoppingCart,
  HiOutlineX,
} from "react-icons/hi";
import { useState } from "react";
import { HiOutlineUser } from "react-icons/hi2";

export default function Header({ isAuthenticated, categories }) {
  const [isOpen, setIsOpen] = useState(false);

  
  console.log(categories);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <Wrapper>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold tracking-tight">
              LUXE
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              {categories.slice(0, 5).map((category) => (
                <Link
                  key={category}
                  href={`/shop?filter=${category}`}
                  className="text-gray-700 hover:text-black transition-colors"
                >
                  {category.toUpperCase()}
                </Link>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              {!isAuthenticated ? (
                <Link
                  href="/signin"
                  className="hidden md:block text-gray-700 hover:text-black transition-colors"
                >
                  <HiOutlineUser className="w-5 h-5" />
                </Link>
              ) : (
                // <button className="hidden md:block text-gray-700 hover:text-black transition-colors">
                //   <HiLogout className="w-5 h-5" />
                // </button>
                <SignOutButton />
              )}
              {isAuthenticated && (
                <Link
                  href="/cart"
                  className="relative text-gray-700 hover:text-black transition-colors"
                >
                  <HiOutlineShoppingCart className="w-5 h-5" />
                  {/* <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    0
                  </span> */}
                </Link>
              )}
              
              <button
                className="md:hidden text-gray-700"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? (
                  <HiOutlineX className="w-6 h-6" />
                ) : (
                  <HiOutlineMenu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="px-4 py-4 space-y-3">
              {categories.slice(0, 5).map((category) => (
                <Link
                  key={category}
                  href={`/shop?filter=${category}`}
                  className="block text-gray-700 hover:text-black transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {category}
                </Link>
              ))}
            </div>
          </div>
        )}
      </Wrapper>
    </header>
  );
}
