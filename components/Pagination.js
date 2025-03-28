"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { PAGE_SIZE } from "../utils/constant";
import Wrapper from "./Wrapper";

export default function Pagination({ count }) {
  const pageCount = Math.ceil(count / PAGE_SIZE);
  const pagesArray = Array.from({ length: pageCount }, (_, i) => i + 1);

  const searchParams = useSearchParams();
  const router = useRouter();
  const currentPage = searchParams.get("page") ?? 1;

  function handleChangingPage(pageNum) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", pageNum);

    router.push(`?${params.toString()}`, { scroll: false });
  }

  if (count <= PAGE_SIZE) return null;

  return (
    <div className="mt-8">
      <Wrapper className="flex items-center justify-between">
        <p>
          Showing <span>{(currentPage - 1) * PAGE_SIZE + 1}</span> to{" "}
          <span>
            {" "}
            {currentPage === pageCount ? count : currentPage * PAGE_SIZE}{" "}
          </span>{" "}
          of <span>{count}</span> results
        </p>
        <div className="flex items-center gap-4">
          {pagesArray.map((pageNum) => (
            <button
              // href={`categories?page=${pageNum}`}
              key={pageNum}
              className={`px-4 py-2 rounded-md ${
                pageNum === Number(currentPage)
                  ? "bg-neutral-200"
                  : "hover:bg-neutral-200"
              }`}
              onClick={() => handleChangingPage(pageNum)}
            >
              {pageNum}
            </button>
          ))}
        </div>
      </Wrapper>
    </div>
  );
}
