"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function useMultiFilters(key, value) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const updateQuery = (key, value) => {
    const params = new URLSearchParams(searchParams.toString());

    let existingValues = params.get(key)?.split("&") || [];

    if (existingValues.includes(value)) {
      existingValues = existingValues.filter((v) => v !== value);
    } else {
      existingValues.push(value);
    }

    if (existingValues.length) {
      params.set(key, existingValues.join("&"));
    } else {
      params.delete(key);
    }

    console.log(existingValues);

    router.push(`?${params.toString()}`, { scroll: false });
  };

  return updateQuery;
}
