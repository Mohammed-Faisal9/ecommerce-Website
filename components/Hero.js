import Image from "next/image";
import Wrapper from "./Wrapper";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

export default function Hero() {
  return (
    <div className=" bg-neutral-100 py-10 sm:py-0">
      <Wrapper className="flex flex-col-reverse sm:flex-row items-start sm:items-center justify-center sm:justify-between ">
        <div className="z-10">
          <h1 className="text-4xl mb-4">Fresh Arrivals Online</h1>
          <p className="text-neutral-700 mb-8">
            Discover Our Newest Collection Today.
          </p>
          <Link href="/categories" className="bg-black text-white px-6 py-3 rounded hover:bg-neutral-800 transition-all">
            View Collection
            <FaArrowRight className="inline-block ml-4 text-sm" />
          </Link>
        </div>
        <div className="relative aspect-square max-w-[350px] sm:block hidden">
          <div className="absolute w-[240px] h-[240px] lg:w-[280px] lg:h-[280px]  bg-neutral-200 rounded-[50%] top-[10%] "></div>
          <Image width="270" height="620" src="/hero-image.png" alt="hero" className="z-10 relative object-cover min-h-96" />
        </div>
      </Wrapper>
    </div>
  );
}
