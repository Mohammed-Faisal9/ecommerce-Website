import Link from "next/link";
import Button from "./Button";
import ProductCard from "./ProductCard";
import Wrapper from "./Wrapper";

export default function Products({ products, title }) {
  return (
    <section className="py-16">
      <Wrapper>
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold mb-8">{title}</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3  lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.$id} product={product} />
          ))}
        </div>

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
