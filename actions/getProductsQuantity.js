"use server";

import { Query } from "node-appwrite";
import { checkAuth } from "../lib/checkAuth";
import { createSessionClient } from "../lib/data-service";
import { cookies } from "next/headers";

export async function getProductsQuantity() {
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
      [Query.equal("user_id", [user.id])]
    );
    // console.log(cartItems);

    if (cartItems.total === 0) {
      return {
        quantity: 0,
      };
    }

    const cartItemsQuantity = cartItems.documents.reduce((acc, item) => {
      return acc + item.quantity;
    }, 0);

    return {
      quantity: cartItemsQuantity,
    };
  } catch (error) {
    console.log(error);
    return {
      quantity: 0,
    };
  }
}
