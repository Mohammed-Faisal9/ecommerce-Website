import Wrapper from "../../../components/Wrapper";
import ProductsList from "../../products/components/ProductsList";
import Pagination from "../../../components/Pagination";
import { getProducts } from "@/features/products/actions/getProducts";
import CategoryFilter from "./CategoryFilter";
import { getCategories } from "@/actions/getCategories";

export default async function Categories({ searchParams }) {
  const { filter } = searchParams;
  console.log(filter);

  const category = filter?.length ? filter.split("&") : [];

  const page = Number(searchParams.page) || 1;

  const { products, total } = await getProducts(page, category);
  const { categories } = await getCategories();
  console.log(products);

  return (
    <div className="py-12">
      <Wrapper>
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-64 shrink-0">
            <CategoryFilter categories={categories} />
          </aside>
          <div className="flex-1">
            <ProductsList products={products} />
          </div>
        </div>
        <Pagination total={total} />
      </Wrapper>
    </div>
  );
}
