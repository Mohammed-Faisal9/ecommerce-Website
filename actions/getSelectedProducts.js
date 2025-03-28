"use server";

import { Query } from "node-appwrite";
import { createAdminClient } from "../lib/data-service";

export async function getSelectedProducts(category) {
  try {
    const { databases } = await createAdminClient();

    const { documents: products } = await databases.listDocuments(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
      process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_PRODUCTS,
      [Query.equal("category", category), Query.limit(4)]
    );

    return products;
  } catch (error) {
    console.log(error);
  }
}
