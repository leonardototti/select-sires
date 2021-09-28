import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper'
import { Container } from 'react-bootstrap'
import { Section, SectionTitle, SlideContainer, PolygonPlaceholder, StampName, SliderButtonsContainer } from './styles'
import stamps from '../../utils/stamps'

export default function StampsSection({ onOpenStampModal, setStampId }) {

  function handleOpenModal(stampId) {
    onOpenStampModal()
    setStampId(stampId)
  }

  return (
    <>
      <Section id="stamps-section">
        <Container>
          <SectionTitle><strong>Nossos</strong> selos</SectionTitle>
          <Swiper 
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={6}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            pagination={{
              clickable: true,
              el: '.slider-pagination'
            }}
            simulateTouch={false}
          >
            {
              stamps.map((stamp) => {
                return (
                  <SwiperSlide key={stamp.id}>
                    <SlideContainer>
                      <PolygonPlaceholder onClick={() => handleOpenModal(stamp.id)}>
                        <img src={`/slider/stamps-slider/${stamp.id >= 10 ? '' : '0'}${stamp.id}.png`} />
                      </PolygonPlaceholder>
                      <StampName>{stamp.name}</StampName>
                    </SlideContainer>
                  </SwiperSlide>
                )
              })
            }

            <SliderButtonsContainer>
              <div className="slider-pagination"></div>
            </SliderButtonsContainer>

          </Swiper>
        </Container>
      </Section>
    </>
  )
}
