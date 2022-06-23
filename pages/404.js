import Layout from "@/components/Layout";
import Link from "next/link";

export default function Custom404() {
  return (
    <Layout title="Page Not Found">
      <section className="pt-2 my-16">
        <div className="text-center my-32">
          <h1 className="font-bold text-4xl">Page Not Found</h1>
          <h4 className="text-xl mt-3">Back to <Link href="/"><a className="font-semibold text-primary hover:text-opacity-70">Home</a ></Link></h4>
        </div>
      </section>
    </Layout>
  )
}
