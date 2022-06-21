import Head from "next/head";

export default function about() {
  return (
    <section className="pt-2 my-24">
      <Head>
        <title>About</title>
      </Head>
      <div className="container">
        <div className="flex flex-wrap items-center">
          <div className="w-full">
            <h1 className="text-4xl font-semibold mb-5">About</h1>
            <p className="text-2xl mb-8 leading-9">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, labore laborum iste minus at quod eaque sit exercitationem unde fugit non molestias consequatur esse libero eligendi rerum pariatur quas, dolorem eos animi deserunt nemo autem tempora? Incidunt maxime itaque, fugit ea illum, eaque quo fugiat praesentium dolores non consequatur voluptatem?</p>
          </div>
        </div>
      </div>
    </section>)
}
