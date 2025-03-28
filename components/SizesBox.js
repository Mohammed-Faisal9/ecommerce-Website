import React from "react";

export default function SizesBox() {
  return (
    <div>
      <p className="text-neutral-500 mb-4">Select Size</p>
      <div className="flex gap-3 mb-8 flex-wrap">
        <button className="border border-black rounded-lg px-4 py-2 w-10 h-10">
          S
        </button>
        <button className="text-sm border border-neutral-300 rounded-lg hover:border-black w-10 h-10">
          M
        </button>
        <button className="text-sm border border-neutral-300 rounded-lg hover:border-black w-10 h-10">
          X
        </button>
        <button className="text-sm border border-neutral-300 rounded-lg hover:border-black w-10 h-10">
          XL
        </button>
        <button className="text-sm border border-neutral-300 rounded-lg hover:border-black w-10 h-10">
          XXL
        </button>
      </div>
    </div>
  );
}
