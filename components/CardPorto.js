import Image from 'next/image'
import PORTO1 from '../public/img/portfolio/coffe.jpg'
import PORTO2 from '../public/img/portfolio/programming.jpg'

export default function CardPorto() {

  const data = [
    {
      id: 1,
      alt: 'Coffe',
      img: PORTO1,
      title: 'Lorem ipsum dolor sit amet consectetur Porto 1.',
      subtitle: 'Lorem ipsum dolor sit porto 1.'
    },
    {
      id: 2,
      alt: 'Programming',
      img: PORTO2,
      title: 'Lorem ipsum dolor sit amet consectetur Porto 2.',
      subtitle: 'Lorem ipsum dolor sit porto 2.'
    }
  ];

  return (
    <div className='grid grid-cols-1 gap-1 text-center md:grid-cols-2 md:gap-5'>
      {
        data.map(({ id, alt, img, title, subtitle }) => {
          return (
            <article key={id} className='p-2 border-black hover:border-2 dark:border-white hover:rounded-lg'>
              <Image src={img} height={230} width={450} alt={alt} layout="responsive" className='rounded-lg' />
              <h4 className='text-2xl my-2 capitalize'>{title}</h4>
              <div className='text-slate-500'>{subtitle}</div>
            </article>
          )
        })
      }
    </div>
  )
}
