"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { createAdminClient } from "../lib/data-service";

export async function loginUser(previousState, formData) {
  const email = formData.get("email");
  const password = formData.get("password");
  console.log(email, password);

  if (!email || !password) {
    return {
      error: "All fields are required",
    };
  }

  const { account } = await createAdminClient();
  try {
    const session = await account.createEmailPasswordSession(email, password);

    cookies().set("session_cookie", session.secret, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      expires: new Date(session.expire),
      path: "/",
    });

    revalidatePath("/", "layout");

    return {
      success: true,
    };
  } catch (error) {
    console.log(error);
    return {
      error: error.message,
    };
  }
}
