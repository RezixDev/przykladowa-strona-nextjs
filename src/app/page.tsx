import Head from 'next/head'
import { Menu } from './components/Menu'
import { Teaser } from './components/Teaser'
import { CardItems }from './components/CardItems'
import { Footer } from './components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Next.js Example</title>
        <meta name="description" content="Next.js rendering example" />
      </Head>

      <Menu />
      <main className="flex-grow">
        <Teaser />
        <CardItems />
      </main>
      <Footer />
    </div>
  )
}