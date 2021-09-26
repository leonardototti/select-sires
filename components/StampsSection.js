import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper'
import { Container } from 'react-bootstrap'
import { useState } from 'react'
import stamps from '../utils/stamps'

const Section = styled.section`
  width: 100%;
  padding: 60px 0px 35px;

  img {
    user-select: none;
    pointer-events: none;
  }
`

const SectionTitle = styled.h2`
  font-family: Inter;
  font-weight: 300;
  color: #000;
  font-size: 30px;
  margin-top: 0!important;
  margin-bottom: 50px!important;
`

const SlideContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    filter: drop-shadow(0px 0px 0px rgba(25, 10, 7, 0.15));

  }
`

const PolygonPlaceholder = styled.div`
  width: 94px;
  height: 88px;
  background-image: url('/slider/stamps-slider/polygon.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  transition: background-image .4s;
  display: grid;
  place-items: center;
  cursor: pointer;

  &:hover {
    background-image: url('/slider/stamps-slider/polygon-hover.png');
  }
`

const StampName = styled.h3`
  color: #000;
  font-family: Inter;
  font-weight: 300;
  font-size: 16px;
  text-transform: uppercase;
  margin: 0;
  margin-top: 25px;
  letter-spacing: 1px;
  user-select: none;
  pointer-events: none;
  text-align: center;
`

const SliderButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
    user-select: none;
  }
`

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
