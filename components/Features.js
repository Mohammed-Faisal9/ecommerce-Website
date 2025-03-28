import Wrapper from "./Wrapper";

import { GrDeliver, GrCompliance } from "react-icons/gr";
import { SlBadge } from "react-icons/sl";

export default function Features() {
  return (
    <section className="py-16">
        <Wrapper className="flex flex-col md:flex-row md:items-center justify-center gap-8">
            <div className="flex flex-col gap-4">
                <div className="bg-neutral-100 rounded-full p-4 w-fit">
                    <GrDeliver className="" />
                </div>
                <h3 className="font-semibold text-xl">Free Shipping</h3>
                <p className="text-neutral-500">Upgrade your style today and get FREE shipping on all orders! Don't miss out.</p>
            </div>
            <div className="flex flex-col gap-4">
                <div className="bg-neutral-100 rounded-full p-4 w-fit">
                    <SlBadge className="" />
                </div>
                <h3 className="font-semibold text-xl">Satisfaction Guarantee</h3>
                <p className="text-neutral-500">Shop confidently with our Satisfaction Guarantee: Love it or get a refund.</p>
            </div>
            <div className="flex flex-col gap-4">
                <div className="bg-neutral-100 rounded-full p-4 w-fit">
                    <GrCompliance  className="" />
                </div>
                <h3 className="font-semibold text-xl">Secure Payment</h3>
                <p className="text-neutral-500">Your security is our priority. Your payments are secure with us.</p>
            </div>
        </Wrapper>
    </section>
  )
}
