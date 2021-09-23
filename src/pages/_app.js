import Head from 'next/head'


import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="theme-color" content="#293650" />
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
