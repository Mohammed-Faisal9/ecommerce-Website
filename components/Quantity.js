"use client";

export default function Quantity({
  quantity,
  handleIncreseQuantity,
  handleDecreseQuantity,
  isLoading=false,
}) {
  return (
    <div className="border border-neutral-300 rounded-md px-4 py-3 flex items-center gap-4 min-w-40 justify-between w-fit ">
      <button
        className="font-bold text-xl"
        onClick={handleIncreseQuantity}
        disabled={isLoading}
      >
        +
      </button>
      <span className="text-sm font-medium">{quantity}</span>
      <button
        className="font-bold text-xl"
        onClick={handleDecreseQuantity}
        disabled={isLoading}
      >
        -
      </button>
    </div>
  );
}
