import IntroSection from "../../components/IntroSection";
import Wrapper from "../../components/Wrapper";
import Image from "next/image";
import { bucktId, projectId } from "../../utils/constant";
import { getCartItems } from "../../actions/getCartItems";
import PaymentContent from "@/components/PaymentContent";

export default async function page() {
  const { items } = await getCartItems();
  console.log(items);

  return (
    <div>
      <IntroSection title="Checkout" />
      <section className="py-16">
        <Wrapper>
          <h1 className="text-2xl font-bold">Checkout</h1>
          <div className="flex flex-col items-center gap-6 md:flex-row">
            <div className="flex-1">
              {items.map((item) => (
                <div className="flex items-center gap-4 mt-8" key={item.$id}>
                  <div className="bg-neutral-100 p-2">
                    <Image
                      src={`https://cloud.appwrite.io/v1/storage/buckets/${bucktId}/files/${item.product_id?.image}/view?project=${projectId}`}
                      alt="image"
                      width={42}
                      height={62}
                    />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm mb-2">
                      {item.product_id?.name}
                    </h4>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-neutral-500">Color:</span>
                      <span
                        className="block w-3 h-3 rounded-full"
                        style={{ backgroundColor: item.product_id.color }}
                      ></span>
                      <span className="text-sm text-neutral-500">Size: M</span>
                    </div>
                  </div>
                  <p className="font-medium text-sm ml-auto">
                    $
                    {item.product_id?.discount
                      ? Math.ceil(
                          item.product_id.price -
                            (item.product_id.price *
                              item.product_id?.discount) /
                              100
                        )
                      : item.product_id.price}
                  </p>
                </div>
              ))}
            </div>
            <PaymentContent />
          </div>
        </Wrapper>
      </section>
    </div>
  );
}
