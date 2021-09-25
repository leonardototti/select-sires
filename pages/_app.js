import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'splide-nextjs/splide/dist/css/themes/splide-default.min.css';
import '../styles/globals.css'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'
import 'swiper/css/autoplay'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon shortcut" href="/favicon.ico"/>

        <link rel="apple-touch-icon" sizes="57x57" href="/favicons/apple-icon-57x57.png"/>
        <link rel="apple-touch-icon" sizes="60x60" href="/favicons/apple-icon-60x60.png"/>
        <link rel="apple-touch-icon" sizes="72x72" href="/favicons/apple-icon-72x72.png"/>
        <link rel="apple-touch-icon" sizes="76x76" href="/favicons/apple-icon-76x76.png"/>
        <link rel="apple-touch-icon" sizes="114x114" href="/favicons/apple-icon-114x114.png"/>
        <link rel="apple-touch-icon" sizes="120x120" href="/favicons/apple-icon-120x120.png"/>
        <link rel="apple-touch-icon" sizes="144x144" href="/favicons/apple-icon-144x144.png"/>
        <link rel="apple-touch-icon" sizes="152x152" href="/favicons/apple-icon-152x152.png"/>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-icon-180x180.png"/>

        <link rel="icon" type="image/png" sizes="192x192" href="/favicons/android-icon-192x192.png"/>
        <link rel="icon" type="image/png" sizes="144x144" href="/favicons/android-icon-144x144.png"/>
        <link rel="icon" type="image/png" sizes="96x96" href="/favicons/android-icon-96x96.png"/>
        <link rel="icon" type="image/png" sizes="72x72" href="/favicons/android-icon-72x72.png"/>
        <link rel="icon" type="image/png" sizes="48x48" href="/favicons/android-icon-48x48.png"/>
        <link rel="icon" type="image/png" sizes="36x36" href="/favicons/android-icon-36x36.png"/>

        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="96x96" href="/favicons/favicon-96x96.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png"/>

        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ffffff" />

        <link rel="preconnect" href="https://fonts.googleapis.com" /> 
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp