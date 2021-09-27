import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper'
import { Container } from 'react-bootstrap'
import { Section, HeaderContainer, SeeMore, BullName, SliderButtonsContainer } from './styles'

export default function HighlightsSection() {
  return (
    <>
      <Section id="highlights-section">
        <Container>
          <HeaderContainer>
            <h2><strong>Destaques</strong> da semana</h2>
            <SeeMore href="#">Ver todos os touros</SeeMore>
          </HeaderContainer>
          <Swiper 
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={3}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            navigation={{ 
              nextEl: '.slider-button-next',
              prevEl: '.slider-button-last'
            }}
            pagination={{ clickable: true }}
          >
            <SwiperSlide>
              <img src="/slider/highlights-slider/01.png" width="100%" height="auto"/>
              <BullName>GENGIS KHAN DE BRAS.</BullName>
            </SwiperSlide>
            <SwiperSlide>
              <img src="/slider/highlights-slider/02.png" width="100%" height="auto"/>
              <BullName>DUQUESA FIV</BullName>
            </SwiperSlide>
            <SwiperSlide>
              <img src="/slider/highlights-slider/03.png" width="100%" height="auto"/>
              <BullName>GENGIS KHAN DE BRAS.</BullName>
            </SwiperSlide>
            <SwiperSlide>
              <img src="/slider/highlights-slider/01.png" width="100%" height="auto"/>
              <BullName>GENGIS KHAN DE BRAS.</BullName>
            </SwiperSlide>
            <SwiperSlide>
              <img src="/slider/highlights-slider/02.png" width="100%" height="auto"/>
              <BullName>DUQUESA FIV</BullName>
            </SwiperSlide>
            <SwiperSlide>
              <img src="/slider/highlights-slider/03.png" width="100%" height="auto"/>
              <BullName>GENGIS KHAN DE BRAS.</BullName>
            </SwiperSlide>
            <SwiperSlide>
              <img src="/slider/highlights-slider/01.png" width="100%" height="auto"/>
              <BullName>GENGIS KHAN DE BRAS.</BullName>
            </SwiperSlide>

            <SliderButtonsContainer>
              <div className="slider-button-last">
                <img src="/icons/slider-arrow-left.svg" width="29px" height="23px" />
              </div>
              <div className="slider-button-next">
                <img src="/icons/slider-arrow-right.svg" width="29px" height="23px" />
              </div>
            </SliderButtonsContainer>
          </Swiper>
        </Container>
      </Section>
    </>
  )
}