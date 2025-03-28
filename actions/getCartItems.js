"use server";

import { cookies } from "next/headers";
import { Query } from "node-appwrite";
import { createSessionClient } from "../lib/data-service";
import { checkAuth } from "../lib/checkAuth";

export async function getCartItems() {
  const sessionCookie = await cookies().get("session_cookie");
  if (!sessionCookie) {
    return {
      items: [],
    };
  }
  try {
    const { databases } = await createSessionClient(sessionCookie.value);
    const { user } = await checkAuth();
    if (!user) {
      return {
        items: [],
      };
    }

    const { documents: cartItems } = await databases.listDocuments(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
      process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_CART,
      [Query.equal("user_id", [user.id])]
    );
    // console.log(cartItems);
    return {
      items: cartItems,
    };
  } catch (error) {
    console.log(error);
    return {
      items: [],
    };
  }
}
