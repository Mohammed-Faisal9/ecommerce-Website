import Link from "next/link";

export default function OrderCheckout({ totalPrice }) {
  const TAX = 3.00;
  const total = parseFloat(totalPrice) + TAX;
  return (
    <div className="px-4 py-8 border border-neutral-200 rounded-md sm:min-w-80">
      <h3 className="text-xl font-semibold mb-8">Order Summary</h3>
      <div className="flex justify-between items-center mb-4">
        <p className="text-sm font-medium text-neutral-500">Subtotal</p>
        <p className="text-sm">${totalPrice}</p>
      </div>
      <div className="flex justify-between items-center mb-4">
        <p className="text-sm font-medium text-neutral-500">Shipping</p>
        <p className="text-sm">Free</p>
      </div>
      <div className="flex justify-between items-center mb-4 pb-4 border-b border-neutral-200">
        <p className="text-sm font-medium text-neutral-500">Tax</p>
        <p className="text-sm">${TAX}</p>
      </div>
      <div className="flex justify-between items-center my-4">
        <p className="text-sm font-medium">Total</p>
        <p className="text-sm">${total}</p>
      </div>
      <Link href="/checkout" className="w-full mt-4 bg-black text-white px-6 py-3 rounded hover:bg-neutral-800 transition-all flex items-center justify-center">Checkout</Link>
      <Link href="/categories" className="underline mt-8 mx-auto block w-fit">
        Contiune Shopping
      </Link>
    </div>
  );
}
