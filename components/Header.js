import Link from "next/link";
import Wrapper from "./Wrapper";

import Image from "next/image";

import { checkAuth } from "../lib/checkAuth";
import Cart from "./Cart";
import MobileHeader from "./MobileHeader";
import DesktopHeader from "./DesktopHeader";
import SignOutButton from "./SignOutButton";

export default async function Header() {
  const { isAuthenticated } = await checkAuth();

  return (
    <header className="py-6">
      <Wrapper className="flex justify-between items-center gap-6">
        {/* For Mobile Devices */}
        <MobileHeader isAuthenticated={isAuthenticated} />
        <Link href="/">
          <Image width="163" height="41" src="/logo.svg" alt="logo" />
        </Link>
        {/* For Desktop Devics */}
        <DesktopHeader isAuthenticated={isAuthenticated} />
        {isAuthenticated && (
          <div className="flex gap-6 items-center">
            <Cart />
            <SignOutButton />
          </div>
        )}
      </Wrapper>
    </header>
  );
}
