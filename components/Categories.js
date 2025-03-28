import Wrapper from "./Wrapper";
import FilterSidebar from "./FilterSidebar";
import ProductsList from "./ProductsList";
import Pagination from "./Pagination";
import { getPaginatedProducts } from "../actions/getPaginatedProducts";
import { getAvailableCategoriesAndColors } from "../actions/getAvailableCategoriesAndColors";

export default async function Categories({ searchParams }) {
  const { filter, price, color } = searchParams;

  const arrayFiltered = filter?.length ? filter.split("&") : [];

  const priceRange = price?.split("-") || ["all"];

  const page = Number(searchParams.page) || 1;

  const [{ products: paginatedProducts, total }, { categories, colors }] =
    await Promise.all([
      getPaginatedProducts(page, arrayFiltered, priceRange, color),
      getAvailableCategoriesAndColors(),
    ]);
  console.log(paginatedProducts);

  return (
    <div className="py-12">
      <Wrapper>
        <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-8 items-start">
          <FilterSidebar categories={categories} colors={colors} />
          <ProductsList products={paginatedProducts} />
        </div>
        <Pagination count={total} />
      </Wrapper>
    </div>
  );
}
