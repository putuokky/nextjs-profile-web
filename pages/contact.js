import Head from "next/head";

export default function contact() {
  return (
    <section className="pt-2 my-24">
      <Head>
        <title>Contact</title>
      </Head>
      <div className="container">
        <div className="flex flex-wrap items-center">
          <div className="w-full">
            <h1 className="text-4xl font-semibold mb-5">Contact</h1>
            <p className="text-2xl mb-8 leading-9">Odit minima tempore, itaque culpa incidunt nostrum labore, ullam ipsam accusantium rerum quisquam esse ex.</p>
            <ul className='-mt-2'>
              <li className='py-2'>Email : lutfi@gmail.com</li>
              <li>Phone : +62134567890</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
