"use server";

import { cookies } from "next/headers";
import { createSessionClient } from "../lib/data-service";
import { checkAuth } from "../lib/checkAuth";
import { Query } from "node-appwrite";

export async function getProductQuantity(productId) {
  const sessionCookie = await cookies().get("session_cookie");
  if (!sessionCookie) {
    return {
      quantity: 0,
    };
  }

  try {
    const { databases } = await createSessionClient(sessionCookie.value);
    const { user } = await checkAuth();
    if (!user) {
      return {
        quantity: 0,
      };
    }

    const cartItems = await databases.listDocuments(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
      process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_CART,
      [
        Query.equal("user_id", [user.id]),
        Query.equal("product_id", [productId]),
      ]
    );
    // console.log(cartItems);

    if (cartItems.total === 0) {
      return {
        quantity: 0,
      };
    }

    return {
      quantity: cartItems.documents[0].quantity,
    };
  } catch (error) {
    console.log(error);
    return {
      quantity: 0,
    };
  }
}
