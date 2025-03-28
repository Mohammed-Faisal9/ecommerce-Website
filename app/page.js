import Hero from "../components/Hero";
import Features from "../components/Features";
import TopRating from "../components/TopRating";
import Cta from "../components/Cta";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import { getAllProducts } from "../actions/getAllProducts";

export const revalidate = 3600;

export default async function Home() {
  const { products } = await getAllProducts();

  const someOfTheProducts = products.slice(0, 8);

  return (
    <>
      <Hero />
      <Features />
      <TopRating products={products} />
      <Cta />
      <Products products={someOfTheProducts} title="Our Products" />
      
      <Newsletter />
    </>
  );
}
