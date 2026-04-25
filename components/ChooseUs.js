import Image from "next/image";
import Wrapper from "./Wrapper";

export default function ChooseUs() {
  return (
    <section className="py-16 bg-gray-50">
      <Wrapper>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose LUXE?
            </h2>
            <p className="text-gray-600 mb-6">
              We believe in sustainable fashion that doesn't compromise on
              style. Each piece is carefully selected and crafted with attention
              to detail.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center text-white text-sm flex-shrink-0 mt-0.5">
                  ✓
                </div>
                <span>Premium quality materials sourced ethically</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center text-white text-sm flex-shrink-0 mt-0.5">
                  ✓
                </div>
                <span>Free shipping on orders over $100</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center text-white text-sm flex-shrink-0 mt-0.5">
                  ✓
                </div>
                <span>30-day hassle-free returns</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center text-white text-sm flex-shrink-0 mt-0.5">
                  ✓
                </div>
                <span>Dedicated customer support team</span>
              </li>
            </ul>
          </div>
          <div className="relative w-full h-64 md:h-80">
           
            <Image
              src="/photo.avif"
              alt="Style"
              fill
              className="w-full h-64 object-cover rounded-lg mt-8"
            />
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
