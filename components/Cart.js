import Image from "next/image";
import Link from "next/link";
import { getProductsQuantity } from "../actions/getProductsQuantity";

export default async function Cart() {
  const { quantity } = await getProductsQuantity();

  return (
    <div>
      <Link href="/cart" className="relative">
        <span className="absolute -top-2 -right-2 bg-yellow-400 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
          {quantity}
        </span>
        <Image width="18" height="18" src="/cart.svg" alt="cart" />
      </Link>
    </div>
  );
}
