import Button from "./Button";
import Wrapper from "./Wrapper";

export default function Newsletter() {
  return (
    <section className="bg-neutral-100 py-16">
        <Wrapper className="flex flex-col md:flex-row md:justify-between">
            <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold mb-4">Join Our Newsletter</h3>
                <p className="text-neutral-500">We love to surprise our subscribers with occasional gifts.</p>
            </div>
            <div className="flex flex-wrap justify-center md:flex-nowrap md:justify-start md:items-center gap-3 mt-8 md:mt-0">
                <input type="text" className="bg-inherit px-4 py-3 rounded-l-md border border-neutral-300 rounded-md overflow-hidden outline-none" placeholder="your email address" />
                <Button>Subscribe</Button>
            </div>
        </Wrapper>
    </section>
  )
}
