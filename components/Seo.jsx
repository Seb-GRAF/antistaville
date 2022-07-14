import React from 'react'
import Head from 'next/head'

const defaultDescription =
  "Antistaville, l'endroît ou tous vos rêves sont possibles"
const defaultTitle = 'Antistaville'

const Seo = ({ title, description }) => {
  return (
    <Head>
      <title>{title ?? defaultTitle}</title>
      <meta name='description' content={description ?? defaultDescription} />
      <link rel='icon' href='/favicon.ico' />
      <meta name='theme-color' content='#ffffff' />
    </Head>
  )
}

export default Seo
