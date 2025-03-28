"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { createSessionClient } from "../lib/data-service";

export async function logoutUser() {
  const sessionCookie = await cookies().get("session_cookie");
  if (!sessionCookie) {
    return {
      error: "You are not logged in",
    };
  }

  try {
    const { account } = await createSessionClient(sessionCookie.value);

    console.log(account);
    await account.deleteSession("current");

    await cookies().delete("session_cookie");
    revalidatePath("/", "layout");
    return {
      success: true,
    };
  } catch (error) {
    console.log(error);
    return {
      error: "Something went wrong",
    };
  }
}
