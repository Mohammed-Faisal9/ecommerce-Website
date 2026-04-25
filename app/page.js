
import OurProducts from "../components/OurProducts";
import Hero from "@/components/Hero";
import ChooseUs from "@/components/ChooseUs";
import { getProducts } from "@/features/products/actions/getProducts";

export const revalidate = 3600;

export default async function Home() {
  const { products } = await getProducts();

  console.log(products);

  const someOfTheProducts = products?.slice(0, 8);

  return (
    <>
      <Hero />
      <OurProducts products={someOfTheProducts} title="Our Products" />
      <ChooseUs />
    </>
  );
}
