import Button from "@/components/Button";
import IntroSection from "@/components/IntroSection";
import Wrapper from "@/components/wrapper";
import { FaArrowRight } from "react-icons/fa";

export default function page() {
  return (
    <div>
      <IntroSection title="Order Failed" bgColor="bg-red-100" />
      <div className="py-32">
        <Wrapper className="max-w-[380px] mx-auto">
          <img src="/failed.svg" alt="success" className="mx-auto" />
          <h2 className="text-center text-2xl font-bold mt-8">
            Oops! There was an issue
          </h2>
          <p className="text-center text-neutral-500 mt-4">
            Oops! There was a problem processing your order. Please review the
            details and try again.
          </p>
          <Button className="flex items-center gap-2 mx-auto mt-12">
            Go to my account <FaArrowRight />
          </Button>
        </Wrapper>
      </div>
    </div>
  );
}
