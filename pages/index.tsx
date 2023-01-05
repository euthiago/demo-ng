import Head from 'next/head'
import Link from 'next/link'
import { Inter } from '@next/font/google'
const inter = Inter({ subsets: ['latin'] })

// Reference: https://ngcash.notion.site/Processo-Seletivo-NG-TRYBE-223de32e1ed047f2aa90cc0da84754ee
export default function Index() {
  return (
    <>
      <Head>
        <title>NG Cash</title>
        <meta name="description" content="NG Cash - Your next gen money transfer app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={inter.className}>

	  	<Link href="/me">meu perfil</Link>

	  </main>
    </>
  )
}
