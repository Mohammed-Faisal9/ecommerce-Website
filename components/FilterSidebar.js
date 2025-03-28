import MobileFilter from "./MobileFilter";
import DesktopFilter from "./DesktopFilter";

const prices = [
  { name: "All", value: "all" },
  { name: "$0 - $20", value: "0-20" },
  { name: "$20 - $50", value: "20-50" },
  { name: "$50 - $100", value: "50-100" },
  { name: "Over $100", value: "100" },
];

export default function FilterSidebar({ categories, colors }) {
  return (
    <aside>
      <MobileFilter categories={categories} colors={colors} prices={prices} />
      <DesktopFilter categories={categories} colors={colors} prices={prices} />
    </aside>
  );
}
