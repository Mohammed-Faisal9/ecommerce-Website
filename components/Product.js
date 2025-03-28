"use client";

import { FaRegHeart, FaStar } from "react-icons/fa";
import Wrapper from "./Wrapper";
import Button from "./Button";
import SizesBox from "./SizesBox";
import Image from "next/image";
import Quantity from "./Quantity";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { addToCart } from "../actions/addToCart";
import { getProductQuantity } from "../actions/getProductQuantity";

export default function Product({ product, image }) {
  const priceAfterDiscount = Math.ceil(
    product.price - (product.price * product?.discount) / 100
  );
  const [quantity, setQuantity] = useState(0);
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const productId = product.$id;

  useEffect(() => {
    async function getQuantity() {
      const { quantity: cartQuantity } = await getProductQuantity(productId);
      console.log(cartQuantity);
      if (cartQuantity === 0) return;
      setQuantity(cartQuantity);
    }
    getQuantity();
  }, [setQuantity, productId]);

  const detials = {
    productId,
    quantity,
  };

  function handleIncreseQuantity() {
    setQuantity((prev) => prev + 1);
  }

  function handleDecreseQuantity() {
    setQuantity((prev) => (prev <= 0 ? 0 : prev - 1));
  }

  async function handleAddToCart() {
    setIsAddedToCart(true);
    const { success } = await addToCart(detials);
    setIsAddedToCart(false);
    if (success) {
      toast.success("Product added to cart");
    } else {
      toast.error("Something went wrong");
    }
  }

  return (
    <section className="py-12">
      <Wrapper className="flex flex-col md:flex-row md:justify-between gap-6 lg:gap-12 md:gap-4">
        <div className="flex-1 bg-neutral-100 grid place-items-center aspect-square relative">
          <Image fill src={image} alt="product" />
        </div>
        <div className="flex-1">
          <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
          <p className="text-neutral-500 flex gap-2 bg-neutral-100 w-fit py-2 px-6 rounded-full items-center mb-4">
            <FaStar className="text-yellow-400" /> {product.rating} Star Rating
          </p>
          <div className="flex items-center gap-2 mb-4">
            <p className="text-neutral-500">Price:</p>
            <h4
              className={`text-xl font-semibold ${
                product.discount === null ? "" : "line-through text-neutral-500"
              }`}
            >
              ${product.price}
            </h4>
            {product.discount != null && (
              <h4 className={`text-xl font-semibold `}>
                ${priceAfterDiscount}
              </h4>
            )}
          </div>
          <p className="text-neutral-500 mb-2">Color:</p>
          <div className="flex gap-2 ml-3 mb-4">
            <span
              className={`w-6 h-6 rounded-full shadow-md`}
              style={{ backgroundColor: product.color }}
            ></span>
            <p className="text-neutral-500">{product.color}</p>
          </div>
          <SizesBox />
          <p className="text-neutral-500 mb-4">Quantity</p>

          <Quantity
            quantity={quantity}
            handleIncreseQuantity={handleIncreseQuantity}
            handleDecreseQuantity={handleDecreseQuantity}
          />

          <div className="flex gap-4 mb-4 items-center mt-8">
            <Button
              className="flex-1"
              onClick={handleAddToCart}
              disabled={isAddedToCart}
            >
              Add to cart
            </Button>
            <button className="border border-neutral-500 rounded-md px-2 py-3 w-11 h-11 flex items-center justify-center hover:border-black">
              <FaRegHeart className="text-2xl text-neutral-500" />
            </button>
          </div>
          <p className="text-neutral-500">- Free shopping on orders 100$ +</p>
        </div>
      </Wrapper>
    </section>
  );
}
