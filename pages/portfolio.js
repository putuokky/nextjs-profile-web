import CardPorto from '@/components/CardPorto'
import Layout from '@/components/Layout'

export default function portfolio() {
  return (
    <Layout title="Portfolio &mdash; My Portfolio Sites">
      <section className="pt-2 my-24">
        <div className="container">
          <div className="flex flex-wrap items-center">
            <div className="w-full">
              <h1 className="text-4xl font-semibold mb-5">Portfolio</h1>
              <p className="text-2xl mb-8 leading-9">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione eveniet unde odio ducimus incidunt ipsum laudantium necessitatibus quibusdam sunt beatae?</p>

              <CardPorto />
              <CardPorto />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
