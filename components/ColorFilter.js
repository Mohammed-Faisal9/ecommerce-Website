import useSingleFilters from "../hooks/useSingleFilter";

export default function ColorFilter({ colors }) {
  const updateQuery = useSingleFilters();

  return (
    <div className="flex gap-2  mb-4 flex-wrap">
      {colors.map((color) => (
        <span
          key={color}
          className="w-8 h-8 rounded-full shadow-md cursor-pointer"
          style={{ backgroundColor: color }}
          onClick={() => updateQuery("color", color)}
        ></span>
      ))}
    </div>
  );
}
