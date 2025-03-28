"use server";

import { createAdminClient } from "../lib/data-service";

export async function getAllProducts() {
  try {
    const { databases } = await createAdminClient();

    const { documents: products, total } = await databases.listDocuments(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
      process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_PRODUCTS
    );

    return { products, total };
  } catch (error) {
    console.log(error);
  }
}
