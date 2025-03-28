import { useSearchParams } from "next/navigation";
import useSingleFilters from "../hooks/useSingleFilter";

export default function PriceFilter({ price }) {
  const searchParams = useSearchParams();

  const updateQuery = useSingleFilters();

  return (
    <div className="py-3 border-b border-neutral-100 flex gap-2 items-center">
      <input
        type="radio"
        name="category"
        id="category-1"
        className="accent-blue-600 w-3 h-3"
        onChange={() => updateQuery("price", price.value)}
        checked={price.value === searchParams.get("price")}
      />
      <span className="text-neutral-500">{price.name}</span>
    </div>
  );
}
