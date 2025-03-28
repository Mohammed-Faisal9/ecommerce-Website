"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { ID } from "node-appwrite";
import { createAdminClient } from "../lib/data-service";

export async function createUser(previousState, formData) {
  console.log(formData);

  const email = formData.get("email");
  const password = formData.get("password");
  const name = formData.get("name");

  if (!email || !password || !name) {
    return {
      error: "All fields are required",
    };
  }

  if (password.length < 8) {
    return {
      error: "Password must be at least 8 characters long",
    };
  }

  const { account } = await createAdminClient();

  try {
    await account.create(ID.unique(), email, password, name);

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
