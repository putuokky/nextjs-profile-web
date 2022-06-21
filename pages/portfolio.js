import Head from 'next/head'
import Image from 'next/image'

export default function portfolio() {
  return (
    <section className="pt-2 my-24">
      <Head>
        <title>Portfolio</title>
      </Head>
      <div className="container">
        <div className="flex flex-wrap items-center">
          <div className="w-full">
            <h1 className="text-4xl font-semibold mb-5">Portfolio</h1>
            <p className="text-2xl mb-8 leading-9">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, earum.</p>

            <div className='flex -mx-2'>
              <div className='w-1/2  px-2 text-center'>
                <Image src="/img/portfolio/coffe.jpg" height={230} width={450} layout="responsive" className='max-w-full rounded-lg' />
                <h4 className='text-2xl my-2 capitalize'>Lorem ipsum dolor sit amet consectetur.</h4>
                <div className='text-slate-500'>Lorem ipsum dolor sit.</div>
              </div>
              <div className='w-1/2  px-2 text-center'>
                <Image src="/img/portfolio/programming.jpg" height={230} width={450} layout="responsive" className='max-w-full rounded-lg' />
                <h4 className='text-2xl my-2 capitalize'>Lorem ipsum dolor sit amet consectetur.</h4>
                <div className='text-slate-500'>Lorem ipsum dolor sit.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
