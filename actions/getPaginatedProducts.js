"use server";

import { Query } from "node-appwrite";
import { createAdminClient } from "../lib/data-service";
import { PAGE_SIZE } from "../utils/constant";

export async function getPaginatedProducts(
  page,
  arrayFiltered,
  priceRange,
  color
) {
  try {
    const filters = [
      Query.limit(PAGE_SIZE),
      Query.offset((page - 1) * PAGE_SIZE),
    ];

    if (color) {
      filters.push(Query.equal("color", color));
    }

    if (arrayFiltered.length > 0) {
      filters.push(Query.equal("category", arrayFiltered));
    }

    if (priceRange[0] === "all") {
      filters.push(Query.greaterThanEqual("price", 0));
    } else if (priceRange.length === 1) {
      filters.push(Query.greaterThanEqual("price", Number(priceRange[0])));
    } else {
      filters.push(
        Query.greaterThanEqual("price", Number(priceRange[0])),
        Query.lessThanEqual("price", Number(priceRange[1]))
      );
    }

    const { databases } = await createAdminClient();
    const { documents: products, total } = await databases.listDocuments(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
      process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_PRODUCTS,
      filters
    );
    // [Query.limit(limit), Query.offset((page - 1) * limit)]
    return { products, total };
  } catch (error) {
    console.log(error);
  }
}
