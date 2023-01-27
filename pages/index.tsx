import Head from 'next/head'
//import styles from '@/styles/Home.module.css'
import Header from '@/components/header'
import Pricing from '@/components/pricing';
import { Features } from '@/components/Features';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <main >
        <Header />
        <Pricing />
        <Features />
      </main>
    </>
  )
}
