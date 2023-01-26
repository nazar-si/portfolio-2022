import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return  <>
    <Head>
      <title>Nazar Si</title>
      <meta name="description" content="Personal portfolio site" />
    </Head>
    <Component {...pageProps} />
  </>
}
