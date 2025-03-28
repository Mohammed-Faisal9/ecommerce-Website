"use server";

import { revalidatePath } from "next/cache";
import { ID, Query } from "node-appwrite";
import { createSessionClient } from "../lib/data-service";
import { redirect } from "next/navigation";
import { checkAuth } from "../lib/checkAuth";
import { cookies } from "next/headers";

export async function addToCart(details) {
  const sessionCookie = await cookies().get("session_cookie");

  if (!sessionCookie) {
    redirect("/signin");
  }

  try {
    const { databases } = await createSessionClient(sessionCookie.value);
    const { user } = await checkAuth();

    if (!user) {
      redirect("/signin");
    }

    // Check if the product already exists in the cart
    const existingCartItems = await databases.listDocuments(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
      process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_CART,
      [
        Query.equal("user_id", user.id),
        Query.equal("product_id", details.productId),
      ]
    );

    if (existingCartItems.total > 0) {
      // Product exists in the cart, check quantity
      const existingProduct = existingCartItems.documents[0];
      const newQuantity = details.quantity;

      if (newQuantity <= 0) {
        // If quantity is 0 or less, delete the item
        await databases.deleteDocument(
          process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
          process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_CART,
          existingProduct.$id
        );
      } else {
        // Otherwise, update the quantity
        await databases.updateDocument(
          process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
          process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_CART,
          existingProduct.$id,
          {
            quantity: newQuantity,
          }
        );
      }
    } else {
      // If the product is not in the cart, create a new entry
      if (details.quantity > 0) {
        await databases.createDocument(
          process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
          process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_CART,
          ID.unique(),
          {
            user_id: user.id,
            product_id: details.productId,
            quantity: details.quantity,
          }
        );
      }
    }

    revalidatePath("/", "layout");

    return { success: true };
  } catch (error) {
    console.log(error);
  }
}
