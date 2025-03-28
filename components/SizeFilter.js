export default function SizeFilter() {
  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

  return (
    <div>
      <div className="flex gap-3 mb-8 flex-wrap">
        {sizes.map((size) => (
          <button
            key={size}
            className="text-sm border border-neutral-300 rounded-lg  py-2 w-10 h-10"
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
}
