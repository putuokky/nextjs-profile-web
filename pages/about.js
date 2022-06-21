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
            <p className="text-2xl mb-8 leading-9">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam dicta, nostrum totam mollitia ea, nisi autem repellat similique earum ullam minima ipsa accusamus quisquam unde alias deserunt tenetur placeat nesciunt! Nam earum inventore ea ad sequi voluptates explicabo ratione laudantium deserunt ipsa autem adipisci distinctio obcaecati possimus alias numquam itaque impedit dignissimos cumque sunt ab, dolorem recusandae in temporibus. Consectetur nam ex, nostrum pariatur sint aliquid reiciendis itaque provident dicta vero, nisi at possimus. Assumenda aspernatur dolorem ratione nobis accusamus?</p>
          </div>
        </div>
      </div>
    </section>
  )
}
