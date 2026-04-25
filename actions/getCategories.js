import { createAdminClient } from "@/lib/data-service";
import { Query } from "node-appwrite";

export async function getCategories() {
    const { databases} = await createAdminClient();

    const { documents: categories } = await databases.listDocuments(
        process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
        process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_PRODUCTS,
        [
            Query.select(["category"]),
            // Query.distinct("category"),
        ]
    );

    // console.log(categories);
    

    return {categories : [...new Set(categories.map((category) => category.category))]}
}