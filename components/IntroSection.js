import Wrapper from './Wrapper'
import Link from 'next/link'
import { FaChevronRight } from 'react-icons/fa6'

export default function IntroSection({ title, bgColor }) {
  return (
    <section className={`py-8 ${bgColor ? bgColor : "bg-neutral-100"}`}>
        <Wrapper>
            <h3 className='text-2xl font-bold mb-4'>{title}</h3>
            <div className='flex items-center gap-4'>
                <Link href="/" className=' hover:underline text-slate-500 font-medium'>Home</Link>
                <FaChevronRight className='text-slate-500 text-sm' />
                <p className='text-sm'>{title}</p>
            </div>
        </Wrapper>
    </section>
  )
}
