"use client";

import Image from "next/image";

import Quantity from "./Quantity";
import { useState, useEffect } from "react";
import { bucktId, projectId } from "../utils/constant";
import DeleteItemButton from "./DeleteItemButton";
import { toast } from "react-toastify";
import { addToCart } from "../actions/addToCart";

export default function CartItem({ item }) {
  const [quantity, setQuantity] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [timeoutId, setTimeOutId] = useState(null);

  const price = item.product_id?.discount
    ? Math.ceil(
        item.product_id.price -
          (item.product_id.price * item.product_id?.discount) / 100
      )
    : item.product_id.price;

  useEffect(() => {
    setQuantity(item.quantity);
  }, [item.quantity]);

  const ImageUrl = `https://cloud.appwrite.io/v1/storage/buckets/${bucktId}/files/${item.product_id?.image}/view?project=${projectId}`;

  console.log(item);

  function handleIncreseQuantity() {
    setQuantity((prev) => prev + 1);

    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    const newTimeout = setTimeout(async function increse() {
      setIsLoading(true);
      const { success } = await addToCart({
        productId: item.product_id.$id,
        quantity,
      });

      if (success) {
        toast.success("Product added to cart");
      } else {
        toast.error("Something went wrong");
      }
      setIsLoading(false);
    }, 500);

    setTimeOutId(newTimeout);
  }

  function handleDecreaseQuantity() {
    setQuantity((prev) => (prev <= 0 ? 0 : prev - 1));

    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    const newTimeout = setTimeout(async function increse() {
      setIsLoading(true);
      const { success } = await addToCart({
        productId: item.product_id.$id,
        quantity,
      });

      if (success) {
        toast.success("Product removed from the cart");
      } else {
        toast.error("Something went wrong");
      }
      setIsLoading(false);
    }, 500);

    setTimeOutId(newTimeout);
  }

  return (
    <div className="flex items-center gap-4 mt-8">
      <div className="bg-neutral-100 p-2">
        <Image src={ImageUrl} alt="image" width={42} height={62} />
      </div>
      <div>
        <h4 className="font-medium text-sm mb-2">{item.product_id.name}</h4>
        <div className="flex items-center gap-2">
          <span className="text-sm text-neutral-500">Color:</span>
          <span
            className="block w-3 h-3 rounded-full"
            style={{ backgroundColor: item.product_id.color }}
          ></span>
          <span className="text-sm text-neutral-500">Size: M</span>
        </div>
      </div>

      <p className="font-medium text-sm ml-auto">${price}</p>

      <Quantity
        productId={item.product_id.$id}
        quantity={quantity}
        handleIncreseQuantity={handleIncreseQuantity}
        handleDecreseQuantity={handleDecreaseQuantity}
        isLoading={isLoading}
      />

      <DeleteItemButton itemId={item.$id} />
    </div>
  );
}
