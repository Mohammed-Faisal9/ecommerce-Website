import { FaArrowRight } from "react-icons/fa";
import Button from "./Button";
import Wrapper from "./Wrapper";
import Image from "next/image";

export default function Cta() {
  return (
    <section className="bg-neutral-100 py-8 md:py-4">
      <Wrapper className="flex flex-col sm:flex-row justify-between items-center gap-8">
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl font-bold">Browse Our Fashion Paradise!</h3>
          <p className="text-neutral-500">
            Step into a world of style and explore our diverse collection of
            clothing categories.
          </p>
          <Button className="self-start flex items-center gap-3" href="/categories">
            Start Browsing
            <FaArrowRight />
          </Button>
        </div>
        <div className="hidden sm:block relative  min-h-80 " >
            <Image width={320} height={320} src="/ctaImage.png" alt="cta" className="max-h-80 object-cover" />
        </div>
      </Wrapper>
    </section>
  );
}
