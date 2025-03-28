import Image from "next/image";
import Wrapper from "./Wrapper";

import CartItem from "./CartItem";
import OrderCheckout from "./OrderCheckout";
import { getCartItems } from "../actions/getCartItems";
import Link from "next/link";

export default async function MyCart() {
  const { items } = await getCartItems();
  let totalPrice = 0;

  items.map((item) => {
    item.product_id?.discount
      ? (totalPrice +=
          (item.product_id.price -
            (item.product_id.price * item.product_id.discount) / 100) *
          item.quantity)
      : (totalPrice += item.product_id.price * item.quantity);
  });

  console.log(items);
  totalPrice = totalPrice.toFixed(2);

  return (
    <section className="py-20">
      <Wrapper className="flex flex-col gap-8 lg:flex-row">
        {items?.length === 0 ? (
          <div className="flex flex-col justify-center items-center gap-8 w-full">
            <Image src="/emty-cart.png" alt="Empty Cart" width={300} height={300} />
            <p className="text-neutral-700 text-center text-2xl font-semibold">Your cart is empty</p>
            <Link href="/categories" className="bg-primary text-white bg-black p-4 rounded-md">Continue Shopping</Link>
          </div>
        ) : (
          <>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4 pb-4 border-b border-neutral-200">
                My Cart
              </h3>
              {items.length === 0 ? (
                <div className="flex flex-col items-center gap-4">
                  <Image
                    src="/images/empty-cart.png"
                    alt="empty cart"
                    width={300}
                    height={300}
                  />
                  <p className="text-neutral-500">Your cart is empty</p>
                </div>
              ) : (
                <div>
                  {items.map((item) => (
                    <CartItem key={item.$id} item={item} />
                  ))}
                </div>
              )}
            </div>
            <OrderCheckout totalPrice={totalPrice} />
          </>
        )}
      </Wrapper>
    </section>
  );
}
