import Newsletter from "@/components/Newsletter";
import Product from "@/features/products/components/Product";
import ProductDetials from "@/features/products/components/ProductDetials";
import Products from "@/components/OurProducts";
import { getSelectedProducts } from "@/features/products/actions/getSelectedProducts";
import { getProduct } from "@/features/products/actions/getProduct";
import { bucktId, projectId } from "@/utils/constant";

export default async function page({ params }) {
  console.log(params);

  const product = await getProduct(params.productId);
  // console.log(product);

  const products = await getSelectedProducts(product?.category);

  const similarProducts = products?.filter((item) => item.$id !== product?.$id);
  console.log(similarProducts);

  return (
    <div>
      <Product product={product} />
      <ProductDetials detials={product?.description} imageId={product?.image} />
      {similarProducts?.length > 0 && (
        <Products products={similarProducts} title="Similar Products" />
      )}
      <Newsletter />
    </div>
  );
}
