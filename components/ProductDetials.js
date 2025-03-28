import React from "react";
import Wrapper from "./wrapper";
import Image from "next/image";
import { FaCirclePlay } from "react-icons/fa6";


export default function ProductDetials({ detials, image }) {
  

  return (
    <section className="py-12">
      <Wrapper className="grid md:grid-cols-[1fr_350px] gap-12 items-center">
        <div className="">
          <h3 className="text-3xl font-bold mb-4">Product Detials</h3>
          <p className="text-neutral-500">
            {detials}
          </p>
        </div>
        <div className=" bg-blue-300 max-h-[340px] relative flex items-center justify-center rounded-lg cursor-pointer">
            <div className="absolute top-0 left-0 w-full h-full bg-black/70 rounded-lg"></div>
            <FaCirclePlay className="text-white border-2 border-blue-400 rounded-[50%] text-5xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-400" />
            <Image width="300" height="300" src={image} alt="product" />
        </div>
      </Wrapper>
    </section>
  );
}
