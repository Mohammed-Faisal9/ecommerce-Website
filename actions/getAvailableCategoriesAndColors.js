"use server";

import { Query } from "node-appwrite";
import { createAdminClient } from "../lib/data-service";

export async function getAvailableCategoriesAndColors() {
  const { databases } = await createAdminClient();

  const { documents: products } = await databases.listDocuments(
    process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
    process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_PRODUCTS,
    [Query.select(["category", "color"])]
  );
  const categories = [...new Set(products.map((product) => product.category))];
  const colors = [...new Set(products.map((product) => product.color))];

  return { categories, colors };
}
