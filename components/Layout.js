import Head from 'next/head'
import Footer from '../sections/Footer'
import Header from '../sections/Header'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>My Portfolio Sites</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <div className="min-h-screen flex flex-col">
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}
