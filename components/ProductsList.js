import ProductCard from "./ProductCard";

export default function ProductsList({ products }) {


  return (
    <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-2  lg:grid-cols-3 gap-8">
      {products?.map((product) => (
        <ProductCard key={product.$id} product={product} />
      ))}
    </div>
  );
}
