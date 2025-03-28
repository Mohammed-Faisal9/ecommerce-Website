"use server";

import { revalidatePath } from "next/cache";
import { createSessionClient } from "../lib/data-service";
import { checkAuth } from "../lib/checkAuth";
import { cookies } from "next/headers";

export async function deleteFromCart(productId) {
  const sessionCookie = await cookies().get("session_cookie");
  if (!sessionCookie) {
    return {
      error: "You are not logged in",
    };
  }
  try {
    const { databases } = await createSessionClient(sessionCookie.value);
    const { user } = await checkAuth();
    if (!user) {
      return {
        error: "You are not logged in",
      };
    }
    await databases.deleteDocument(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
      process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_CART,
      productId
    );

    revalidatePath("/cart");

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
