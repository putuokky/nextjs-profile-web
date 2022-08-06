import Image from 'next/image'
import BLOG1 from '../public/img/blog/coffe.jpg'
import BLOG2 from '../public/img/blog/programming.jpg'
import BLOG3 from '../public/img/blog/mechanical-keyboard.jpg'

export default function CardBlog() {

  const data = [
    {
      id: 1,
      alt: 'Coffe',
      img: BLOG1,
      title: 'Lorem ipsum dolor sit amet consectetur blog 1.',
      subtitle: 'Lorem ipsum dolor sit blog 1.'
    },
    {
      id: 2,
      alt: 'Programming',
      img: BLOG2,
      title: 'Lorem ipsum dolor sit amet consectetur BLOG 2.',
      subtitle: 'Lorem ipsum dolor sit blog 2.'
    },
    {
      id: 3,
      alt: 'Keyboard',
      img: BLOG3,
      title: 'Lorem ipsum dolor sit amet consectetur BLOG 3.',
      subtitle: 'Lorem ipsum dolor sit blog 3.'
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
