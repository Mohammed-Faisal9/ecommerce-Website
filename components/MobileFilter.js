"use client";

import { FaChevronDown } from "react-icons/fa";

import ColorFilter from "./ColorFilter";
import SizeFilter from "./SizeFilter";

import { useState } from "react";
import useOutsideClick from "../hooks/useOutsideClick";
import useMultiFilters from "../hooks/useMultiFilters";

export default function MobileFilter({ categories, colors, prices }) {
  const [isOpen, setIsOpen] = useState(false);

  const updateQuery = useMultiFilters();

  const ref = useOutsideClick(() => setIsOpen(false));

  return (
    <div className="md:hidden">
      <div className="flex items-center gap-2 overflow-hidden ">
        <div className="flex overflow-x-auto gap-2 flex-1 scroller">
          {categories.map((category) => (
            <button
              key={category}
              className="bg-slate-100 p-2 rounded-lg min-w-[80px]"
            >
              {category}
            </button>
          ))}
        </div>
        <button
          className="flex items-center gap-2 py-2 px-4 border border-slate-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          Filter <FaChevronDown />
        </button>
      </div>
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 grid items-end ">
          <div
            className="h-[30%] p-4 shadow-lg bg-white overflow-y-auto flex flex-col gap-6"
            ref={ref}
          >
            <div>
              <h3 className="font-medium mb-4">Categories</h3>
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    className="bg-slate-100 p-2 rounded-lg"
                    onClick={() => updateQuery("filter", category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-4">Price</h3>
              <div className="flex flex-wrap gap-2">
                {prices.map((price) => (
                  <button
                    key={price.name}
                    className="bg-slate-100 p-2 rounded-lg"
                  >
                    {price.name}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-4">Color</h3>
              <ColorFilter colors={colors} />
            </div>

            <div>
              <h3 className="font-medium mb-4">Size</h3>
              <SizeFilter />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
