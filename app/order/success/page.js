import IntroSection from "@/components/IntroSection";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function page() {
  return (
    <div>
      <IntroSection title="Order Success" bgColor="bg-green-100" />
      <div className="py-32">
        <Wrapper className="max-w-[380px] mx-auto">
          <Image src="/success.png" alt="success" className="mx-auto object-cover" width={200} height={200} />
          <h2 className="text-center text-2xl font-bold mt-8">
            Thank you for shopping
          </h2>
          <p className="text-center text-neutral-500 mt-4">
            Your order has been successfully placed and is now being processed
          </p>
          <Link href="/categories" className="flex items-center justify-center gap-2 mx-auto mt-12 bg-black text-white px-6 py-3 rounded hover:bg-neutral-800 transition-all">
            Continue Shopping <FaArrowRight />
          </Link>
        </Wrapper>
      </div>
    </div>
  );
}
