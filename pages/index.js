import Head from 'next/head'
import HeaderSection from '../components/HeaderSection'
import HighlightsSection from '../components/HighlightsSection'
import ProgramsSection from '../components/ProgramsSection'
import SearchSection from '../components/SearchSection'
import StampsSection from '../components/StampsSection'
import StampModal from '../components/StampModal'
import CatalogsSection from '../components/CatalogsSection'
import TestimoniesSection from '../components/TestimoniesSection'
import PostsSection from '../components/PostsSection'
import AboutSection from '../components/AboutSection'
import RepresentativesSection from '../components/RepresentativesSection'
import NewsSection from '../components/NewsSection'
import NewsletterSection from '../components/NewsletterSection'
import NewsletterModal from '../components/NewsletterModal'
import Footer from '../components/Footer'

import { useState } from 'react'
import Modal from 'react-modal'

Modal.setAppElement('#__next');

export default function Home() {

  // Modal de selos

  const [isStampModalOpen, setIsStampModalOpen] = useState(false);
  const [stampId, setStampId] = useState(1);
  
  function handleOpenStampModal() {
    setIsStampModalOpen(true);
  }

  function handleCloseStampModal() {
    setIsStampModalOpen(false);
  }

  // Modal da newsletter

  const [isNewsletterModalOpen, setIsNewsletterModalOpen] = useState(false);

  function handleOpenNewsletterModal() {
    setIsNewsletterModalOpen(true);
  }

  function handleCloseNewsletterModal() {
    setIsNewsletterModalOpen(false);
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
      <CatalogsSection />
      <TestimoniesSection />
      <PostsSection />
      <AboutSection />
      <RepresentativesSection />
      <NewsSection />
      <NewsletterSection
        onOpenNewsletterModal={handleOpenNewsletterModal}
      />
      <NewsletterModal
        isOpen={isNewsletterModalOpen}
        onRequestClose={handleCloseNewsletterModal}
      />
      <Footer />
    </>
  )
}