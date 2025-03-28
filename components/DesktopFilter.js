"use client";

import { useRouter, useSearchParams } from "next/navigation";
import ColorFilter from "./ColorFilter";
import PriceFilter from "./PriceFilter";
import SizeFilter from "./SizeFilter";
import useMultiFilters from "../hooks/useMultiFilters";

export default function DesktopFilter({ categories, colors, prices }) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const updateQuery = useMultiFilters();

  return (
    <div className="hidden md:block px-4 py-8 rounded-md border border-neutral-300">
      <h3 className="font-medium">Categories</h3>
      <form action={""} className="mt-4">
        {categories.map((category) => (
          <div
            className="py-3 border-b border-neutral-100 flex gap-2 items-center"
            key={category}
          >
            <input
              type="checkbox"
              name="category"
              id="category-1"
              className="accent-blue-600 w-[18px] h-[18px]"
              onChange={() => updateQuery("filter", category)}
              checked={Boolean(searchParams.get("filter")?.includes(category))}
            />
            <span className="text-neutral-500">{category}</span>
          </div>
        ))}
      </form>
      {/* Price */}
      <div className="mt-8">
        <p className="mb-2">Prices</p>
        <form className="mt-4">
          {prices.map((price) => (
            <PriceFilter key={price.name} price={price} />
          ))}
        </form>
      </div>
      <div className="my-8">
        <p className="mb-2">Color:</p>
        <ColorFilter colors={colors} />
      </div>
      <div className="my-8">
        <p className="mb-2">Size:</p>
        <SizeFilter />
      </div>
    </div>
  );
}
