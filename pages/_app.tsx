import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {Fragment} from "react";
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return(
      <Fragment>
        <Head>
          <title>Flashcards</title>
          <meta name="description" content="Language learning app (flashcards) "/>
          <link rel="icon" href="/favicon.ico"/>
        </Head>
        <Component {...pageProps} />
      </Fragment>
  )
}
