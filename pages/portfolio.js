import CardPorto from '@/components/CardPorto'
import Layout from '@/components/Layout'
import Image from 'next/image'

export default function portfolio() {
  return (
    <Layout title="Portfolio">
      <section className="pt-2 my-24">
        <div className="container">
          <div className="flex flex-wrap items-center">
            <div className="w-full">
              <h1 className="text-4xl font-semibold mb-5">Portfolio</h1>
              <p className="text-2xl mb-8 leading-9">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione eveniet unde odio ducimus incidunt ipsum laudantium necessitatibus quibusdam sunt beatae?</p>

              <div className='flex flex-wrap -mx-2'>
                <CardPorto />
                <CardPorto />
                <CardPorto />
                {/* <div className='w-full lg:w-1/2 px-2 text-center py-3'>
                  <Image src="/img/portfolio/coffe.jpg" height={230} width={450} layout="responsive" className='max-w-full rounded-lg' />
                  <h4 className='text-2xl my-2 capitalize'>Lorem ipsum dolor sit amet consectetur.</h4>
                  <div className='text-slate-500'>Lorem ipsum dolor sit.</div>
                </div>
                <div className='w-full lg:w-1/2 px-2 text-center py-3'>
                  <Image src="/img/portfolio/programming.jpg" height={230} width={450} layout="responsive" className='max-w-full rounded-lg' />
                  <h4 className='text-2xl my-2 capitalize'>Lorem ipsum dolor sit amet consectetur.</h4>
                  <div className='text-slate-500'>Lorem ipsum dolor sit.</div>
                </div>
                <div className='w-full lg:w-1/2 px-2 text-center py-3'>
                  <Image src="/img/portfolio/programming.jpg" height={230} width={450} layout="responsive" className='max-w-full rounded-lg' />
                  <h4 className='text-2xl my-2 capitalize'>Lorem ipsum dolor sit amet consectetur.</h4>
                  <div className='text-slate-500'>Lorem ipsum dolor sit.</div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
