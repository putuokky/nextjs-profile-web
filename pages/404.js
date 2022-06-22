import Head from "next/head";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="pt-2 my-16">
      <Head>
        <title>Page Not Found</title>
      </Head>

      <div className="text-center my-32">
        <h1 className="font-bold text-4xl">Page Not Found</h1>
        <h4 className="text-xl mt-3">Back to <Link href="/"><a className="font-semibold text-primary hover:text-opacity-70">Home</a ></Link></h4>
      </div>
    </section >
  )
}
