import {
  FaCcAmex,
  FaCcMastercard,
  FaCcVisa,
  FaGithub,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import Wrapper from "./Wrapper";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <Wrapper className="grid gap-y-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[280px_1fr_1fr_1fr_1fr] gap-6 py-12">
        <div className="flex flex-col gap-4">
          <Image width="163" height="41" src="/logo.svg" alt="logo" />
          <p className="text-neutral-500">
            Created by Mohammed Faisal <br /> Front End Developer
          </p>
          <div className="flex gap-2">
            <FaGithub className="text-4xl text-neutral-500" />
            <FaInstagram className="text-4xl text-neutral-500" />
            <FaYoutube className="text-4xl text-neutral-500" />
          </div>
        </div>
        <div className="">
          <h4 className="font-bold text-sm text-neutral-400 mb-6 uppercase">
            Support
          </h4>
          <ul className="flex flex-col gap-4">
            <li>
              <Link href="/" className="text-neutral-500">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/" className="text-neutral-500">
                Terms of use
              </Link>
            </li>
            <li>
              <Link href="/" className="text-neutral-500">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
        <div className="">
          <h4 className="font-bold text-sm text-neutral-400 mb-6 uppercase">
            Company
          </h4>
          <ul className="flex flex-col gap-4">
            <li>
              <Link href="/" className="text-neutral-500">
                About us
              </Link>
            </li>
            <li>
              <Link href="/" className="text-neutral-500">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/" className="text-neutral-500">
                Careers
              </Link>
            </li>
          </ul>
        </div>
        <div className="">
          <h4 className="font-bold text-sm text-neutral-400 mb-6 uppercase">
            Shop
          </h4>
          <ul className="flex flex-col gap-4">
            <li>
              <Link href="/" className="text-neutral-500">
                My Account
              </Link>
            </li>
            <li>
              <Link href="/" className="text-neutral-500">
                Checkout
              </Link>
            </li>
            <li>
              <Link href="/" className="text-neutral-500">
                Cart
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-neutral-300 mb-6 uppercase">
            Accepted Payments
          </h4>
          <div className="flex gap-4">
            <FaCcMastercard className="text-4xl text-neutral-500" />
            <FaCcAmex className="text-4xl text-neutral-500" />
            <FaCcVisa className="text-4xl text-neutral-500" />
          </div>
        </div>
      </Wrapper>
      <div className="text-center py-8 text-neutral-500 px-4">
        <p>
          Copyright © {new Date().getFullYear()} Mohammed. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
