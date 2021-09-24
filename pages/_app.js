import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'splide-nextjs/splide/dist/css/themes/splide-default.min.css';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="theme-color" content="#293650" />
        <link rel="preconnect" href="https://fonts.googleapis.com" /> 
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
