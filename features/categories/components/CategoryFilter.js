"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function CategoryFilter({ categories }) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const selectedCategory = searchParams.get("filter") || null;

  const onCategoryChange = (category) => {
    router.push(`?${category ? `filter=${category}` : ""}`, { scroll: false });
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      <h3 className="text-gray-900 mb-4">Categories</h3>

      <div className="space-y-2">
        <button
          onClick={() => onCategoryChange(null)}
          className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
            selectedCategory === null
              ? "bg-gray-100 text-gray-900"
              : "hover:bg-gray-100 text-gray-900"
          }`}
        >
          All Products
        </button>

        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
              selectedCategory === category
                ? "bg-gray-100 text-gray-900"
                : "hover:bg-gray-100 text-gray-700"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}
