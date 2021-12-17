import Head from 'next/head'
import Header from '../components/Header';

export default function Home() {
  return (
    <div>
      <Head>
        <title>wqd</title>
        <meta name="description" content="blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Header />
      </div>
    </div>
  )
}
