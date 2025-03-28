"use server";

import { revalidatePath } from "next/cache";
import { createSessionClient } from "../lib/data-service";
import { checkAuth } from "../lib/checkAuth";
import { cookies } from "next/headers";
import { Query } from "node-appwrite";

export async function getDeleteAllProductsInCart() {
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

    const { documents } = await databases.listDocuments(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
      process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_CART,
      [Query.equal("user_id", user.id)]
    );

    if (documents.length === 0) {
      return {
        error: "Cart is empty",
      };
    }

    for (const document of documents) {
      await databases.deleteDocument(
        process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
        process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_CART,
        document.$id
      );
    }
    // await databases.delet

    revalidatePath("/", "cart");

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
