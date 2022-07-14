import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Antistaville</title>
        <meta
          name='description'
          content="Antistaville, l'endroît ou tous vos rêves sont possibles"
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      {/* nothing here yet, rerouting to /actualites/antistabus */}
      <main></main>
    </>
  )
}
