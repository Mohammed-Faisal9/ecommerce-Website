import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative h-[calc(100vh-64px)] bg-gray-900">
      <div className="absolute inset-0 bg-black opacity-50">
        <Image
          src="/hero2.jpg"
          fill
          sizes="100vw"
          priority
         
          alt="Hero"
          className=" object-cover opacity-70"
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
            Spring Collection 2026
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Discover timeless elegance meets modern design
          </p>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded hover:bg-gray-100 transition-colors"
          >
            Shop Now
            <FaArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
