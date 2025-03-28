import { NextResponse } from "next/server";
import { checkAuth } from "./lib/checkAuth";

export async function middleware(request) {
  const { isAuthenticated } = await checkAuth();

  if (!isAuthenticated) {
    return NextResponse.redirect(new URL("/signin", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/cart", "/checkout"],
};
