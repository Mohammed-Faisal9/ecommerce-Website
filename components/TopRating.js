import ProductCard from "./ProductCard";
import Wrapper from "./Wrapper";

export default function TopRating({ products }) {
  const topRatedProducts = products
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 4);

  return (
    <section className="py-16">
      <Wrapper>
        <div className="text-center mb-12">
          <span className="text-neutral-500 uppercase">Shop Now</span>
          <h2 className="text-2xl font-bold mb-8">Top Rating</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3  lg:grid-cols-4 gap-8">
          {topRatedProducts.map((product) => (
            <ProductCard key={product.$id} product={product} />
          ))}
        </div>
      </Wrapper>
    </section>
  );
}
