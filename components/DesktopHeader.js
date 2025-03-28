import Link from "next/link";

export default function DesktopHeader({ isAuthenticated }) {
  return (
    <div className="lg:flex hidden items-center justify-between flex-1">
      <ul className="flex gap-6 items-center text-neutral-700">
        <li>
          <Link
            href="/"
            className="hover:text-black transition-colors duration-100 p-2 border border-neutral-400 rounded-full bg-neutral-100"
          >
            Home
          </Link>
        </li>
        <li className="relative group">
          <Link
            href="/categories"
            className="hover:text-black transition-colors duration-100 p-2 border border-neutral-400 rounded-full"
          >
            Categories
          </Link>
        </li>
        {!isAuthenticated && (
          <>
            <li>
              <Link
                href="/signin"
                className="hover:text-black transition-colors duration-100 p-2 border border-neutral-400 rounded-full"
              >
                Sign in
              </Link>
            </li>
            <li>
              <Link
                href="/signup"
                className="hover:text-black transition-colors duration-100 p-2 border border-neutral-400 rounded-full"
              >
                Sign up
              </Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
}
