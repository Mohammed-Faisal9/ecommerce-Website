import Newsletter from "@/components/Newsletter";
import Product from "@/components/Product";
import ProductDetials from "@/components/ProductDetials";
import Products from "@/components/Products";
import { getSelectedProducts } from "@/actions/getSelectedProducts";
import { getProduct } from "@/actions/getProduct";
import { bucktId, projectId } from "@/utils/constant";

export default async function page({ params }) {
  console.log(params);

  const product = await getProduct(params.productId);
  // console.log(product);

  const products = await getSelectedProducts(product?.category);

  const similarProducts = products?.filter((item) => item.$id !== product?.$id);
  console.log(similarProducts);

  const ImageUrl = `https://cloud.appwrite.io/v1/storage/buckets/${bucktId}/files/${product?.image}/view?project=${projectId}`;

  return (
    <div>
      <Product product={product} image={ImageUrl} />
      <ProductDetials detials={product?.description} image={ImageUrl} />
      {similarProducts?.length > 0 && (
        <Products products={similarProducts} title="Similar Products" />
      )}
      <Newsletter />
    </div>
  );
}
