import Head from 'next/head'
import Footer from '../sections/Footer'
import Header from '../sections/Header'

export default function Layout(props) {
  return (
    <>
      <Head>
        <title>{props.title} &mdash; My Portfolio Sites</title>
      </Head>

      <div className="min-h-screen flex flex-col">
        <Header />
        <main>
          {props.children}
        </main>
        <Footer />
      </div>
    </>
  )
}
