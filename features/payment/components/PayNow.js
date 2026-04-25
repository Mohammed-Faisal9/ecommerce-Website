"use client";

import Button from "../../../components/Button";
import { createCheckoutSession } from "../actions/createCheckoutSession";

// async function 

export default function PaymentButton({ items }) {
  async function handleCheckout() {
    await createCheckoutSession(items)
  }

  return <Button onClick={handleCheckout}>Pay now</Button>;
}
