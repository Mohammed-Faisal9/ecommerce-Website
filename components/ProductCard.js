import Image from "next/image";
import Link from "next/link";
import React from "react";
import { bucktId, projectId } from "../utils/constant";

export default function ProductCard({ product }) {
  const ImageUrl = `https://cloud.appwrite.io/v1/storage/buckets/${bucktId}/files/${product?.image}/view?project=${projectId}`;

  const priceAfterDiscount = Math.ceil(
    product.price - (product.price * product?.discount) / 100
  );

  return (
    <Link href={`/products/${product?.$id}`} className="text-center mx-auto">
      <div className="bg-neutral-100 relative w-48 h-48  lg:h-60 rounded-md">
        <Image fill src={ImageUrl} alt="best selling" />
      </div>
      <h3 className="text-sm font-semibold mt-4">{product?.name}</h3>
      <p className={`text-neutral-500 mt-4`}>
        From{" "}
        <span className={`${product.discount ? "line-through" : ""}`}>
          ${product?.price}
        </span>
        {product.discount && (
          <span className="text-green-500 text-base ml-2 font-semibold">
            ${priceAfterDiscount}
          </span>
        )}
      </p>
    </Link>
  );
}
