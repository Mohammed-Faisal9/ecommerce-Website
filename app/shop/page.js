import Newsletter from "../../components/Newsletter";
import Categories from "../../features/categories/components/Categories";

export default function page({ searchParams }) {
  const currentPage = searchParams?.page || 1;
  console.log(searchParams?.filter);

  return (
    <div>
      <Categories searchParams={searchParams} />
      <Newsletter />
    </div>
  );
}
