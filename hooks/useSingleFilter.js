"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function useSingleFilters(key, value) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const updateQuery = (key, value) => {
    const params = new URLSearchParams(searchParams.toString());

    // let existingValues = params.get(key)?.split("&") || [];
    let existingValues = params.get(key);

    if (existingValues === value) {
      existingValues = null;
    } else {
      existingValues = value;
    }

    if (existingValues) {
      params.set(key, existingValues);
    } else {
      params.delete(key);
    }

    console.log(existingValues);

    router.push(`?${params.toString()}`, { scroll: false });
  };

  return updateQuery;
}
