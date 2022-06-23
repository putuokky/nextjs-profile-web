import Image from 'next/image'
import React from 'react'

export default function CardPorto() {
  return (
    <div className='w-full lg:w-1/2 px-2 text-center py-3'>
      <Image src="/img/portfolio/coffe.jpg" height={230} width={450} layout="responsive" className='max-w-full rounded-lg' />
      <h4 className='text-2xl my-2 capitalize'>Lorem ipsum dolor sit amet consectetur.</h4>
      <div className='text-slate-500'>Lorem ipsum dolor sit.</div>
    </div>
  )
}
