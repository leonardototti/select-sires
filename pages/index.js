import Head from 'next/head'
import HeaderSection from '../components/HeaderSection'
import SearchSection from '../components/SearchSection'

export default function Home() {
  return (
    <>
      <Head>
        <title>Select Sires do Brasil</title>
      </Head>
      <HeaderSection />
      
      <SearchSection />
      <div style={{padding: '500px 20px'}} />
    </>
  )
}