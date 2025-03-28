"use client";

import { getDeleteAllProductsInCart } from "@/actions/getDeleteAllProductsInCart";
import { redirect } from "next/navigation";
import { FaCreditCard, FaPaypal } from "react-icons/fa6";

export default function PaymentContent() {
  async function handlePayment() {
    const { success, error } = await getDeleteAllProductsInCart();
    if (success) {
      console.log("success");
      
      redirect("/order/success");
    } else {
      console.log(error);
      redirect("/order/failed");
      
    }
  }

  return (
    <div className="border border-neutral-300 rounded py-12 px-4 flex-1">
      <h3 className="font-medium text-lg mb-8">Payment Method</h3>
      <p className="text-neutral-500">
        Please select your choice of payment down below. We will use your paypal
        home address for your shipping address
      </p>
      <button
        className="bg-yellow-500  rounded-sm w-full py-2 text-2xl font-bold mt-8 flex items-center justify-center gap-2"
        onClick={handlePayment}
      >
        <FaPaypal />
        <span className="text-white text-sm font-medium">Paypal</span>
      </button>
      <button
        className="bg-neutral-700 rounded-sm w-full py-2 text-2xl font-bold mt-4 flex items-center justify-center gap-2"
        onClick={handlePayment}
      >
        <FaCreditCard />
        <span className="text-white text-sm font-medium">
          Debit or Cradit Card
        </span>
      </button>
    </div>
  );
}
