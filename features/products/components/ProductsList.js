
import ProductCard from "./ProductCard";

export default function ProductsList({ products }) {
  return (
    <div className="grid md:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6">
      {products?.map((product) => (
        <ProductCard key={product.$id} product={product} />
      ))}
    </div>
  );
}
