import Head from 'next/head'
import HeaderSection from '../components/HeaderSection'
import HighlightsSection from '../components/HighlightsSection'
import ProgramsSection from '../components/ProgramsSection'
import SearchSection from '../components/SearchSection'

export default function Home() {
  return (
    <>
      <Head>
        <title>Select Sires do Brasil</title>
      </Head>
      <HeaderSection />
      <SearchSection />
      <HighlightsSection />
      <ProgramsSection />
    </>
  )
}