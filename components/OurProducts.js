import Link from "next/link";
import Wrapper from "./Wrapper";
import ProductsList from "../features/products/components/ProductsList";

export default function OurProducts({ products, title }) {
  return (
    <section className="py-16">
      <Wrapper>
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold mb-8">{title}</h2>
        </div>
        <ProductsList products={products} />

        <div className="flex justify-center mt-12">
          <Link
            href="/categories"
            className="bg-black text-white px-6 py-3 rounded hover:bg-neutral-800 transition-all"
          >
            See More
          </Link>
        </div>
      </Wrapper>
    </section>
  );
}
