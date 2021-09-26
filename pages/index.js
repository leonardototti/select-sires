import Head from 'next/head'
import HeaderSection from '../components/HeaderSection'
import HighlightsSection from '../components/HighlightsSection'
import ProgramsSection from '../components/ProgramsSection'
import SearchSection from '../components/SearchSection'
import StampsSection from '../components/StampsSection'
import StampModal from '../components/StampModal'

import { useState } from 'react'
import Modal from 'react-modal'

Modal.setAppElement('#__next');

export default function Home() {

  const [isStampModalOpen, setIsStampModalOpen] = useState(false);
  const [stampId, setStampId] = useState(1);
  
  function handleOpenStampModal() {
    setIsStampModalOpen(true);
  }

  function handleCloseStampModal() {
    setIsStampModalOpen(false);
  }

  return (
    <>
      <Head>
        <title>Select Sires do Brasil</title>
      </Head>
      <HeaderSection />
      <SearchSection />
      <HighlightsSection />
      <ProgramsSection />

      <StampsSection
        onOpenStampModal={handleOpenStampModal}
        setStampId={setStampId}
      />

      <StampModal
        isOpen={isStampModalOpen}
        onRequestClose={handleCloseStampModal}
        stampId={stampId}
      >

      </StampModal>
    </>
  )
}