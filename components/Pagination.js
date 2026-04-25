"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { PAGE_SIZE } from "../utils/constant";

export default function Pagination({ total }) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const currentPage = searchParams.get("page") ?? 1;
  
  const totalPages = Math.ceil(total / PAGE_SIZE)  || 1;

  function handlePageChange(pageNum) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", pageNum);

    router.push(`?${params.toString()}`, { scroll: false });
  }

  const getPageNumbers = () => {
    const delta = 2;
    const range = [];
    const rangeWithDots = [];
    let l;

    for (let i = 1; i <= totalPages; i++) {
      if (
        i == 1 ||
        i == totalPages ||
        (i >= currentPage - delta && i <= currentPage + delta)
      ) {
        range.push(i);
      }
    }

    range.forEach((i) => {
      if (l) {
        if (i - l === 2) {
          rangeWithDots.push(l + 1);
        } else if (i - l !== 1) {
          rangeWithDots.push("...");
        }
      }
      rangeWithDots.push(i);
      l = i;
    });

    return rangeWithDots;
  };

  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center items-center gap-2 mt-8 flex-wrap">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage == 1}
        className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors cursor-pointer"
        aria-label="Previous page"
      >
        ← Prev
      </button>

      <div className="flex gap-1">
        {getPageNumbers()?.map((page, index) => (
          <button
            key={index}
            onClick={() => typeof page === "number" && handlePageChange(page)}
            disabled={page === "..."}
            className={`px-3 py-2 rounded-lg transition-colors font-medium ${
              page == currentPage
                ? "bg-blue-600 text-white"
                : page === "..."
                  ? "text-gray-500 cursor-default"
                  : "border border-gray-300 text-gray-700 hover:bg-gray-50"
            } disabled:cursor-not-allowed`}
            aria-label={
              page === "number" ? `Go to page ${page}` : undefined
            }
            aria-current={page === currentPage ? "page" : undefined}
          >
            {page}
          </button>
        ))}
      </div>

      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage == totalPages}
        className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors cursor-pointer"
        aria-label="Next page"
      >
        Next →
      </button>
    </div>

  );
}
