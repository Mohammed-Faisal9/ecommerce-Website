"use server";

import { notFound } from "next/navigation";
import { createAdminClient } from "../lib/data-service";

export async function getProduct(id) {
  try {
    const { databases } = await createAdminClient();

    const product = await databases.getDocument(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
      process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_PRODUCTS,
      id
    );
    return product;
  } catch (error) {
    console.log(error);
    notFound();
  }
}
