import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper'
import { Container } from 'react-bootstrap'
import { Section, HeaderContainer, SeeMore, BullNameContainer, BullName, SliderButtonsContainer } from './styles'

export default function HighlightsSection() {
  return (
    <>
      <Section>
        <Container>
          <HeaderContainer>
            <h2><strong>Destaques</strong> da semana</h2>
            <SeeMore href="#">Ver todos os touros</SeeMore>
          </HeaderContainer>
          <Swiper 
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
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
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3
              }
            }}
          >
            <SwiperSlide>
              <img src="/slider/highlights-slider/01.png" width="100%" height="auto"/>
              <BullNameContainer>
                <BullName>GENGIS KHAN DE BRAS.</BullName>
              </BullNameContainer>
            </SwiperSlide>
            <SwiperSlide>
              <img src="/slider/highlights-slider/02.png" width="100%" height="auto"/>
              <BullNameContainer>
                <BullName>DUQUESA FIV</BullName>
              </BullNameContainer>
            </SwiperSlide>
            <SwiperSlide>
              <img src="/slider/highlights-slider/03.png" width="100%" height="auto"/>
              <BullNameContainer>
                <BullName>GENGIS KHAN DE BRAS.</BullName>
              </BullNameContainer>
            </SwiperSlide>
            <SwiperSlide>
              <img src="/slider/highlights-slider/01.png" width="100%" height="auto"/>
              <BullNameContainer>
                <BullName>GENGIS KHAN DE BRAS.</BullName>
              </BullNameContainer>
            </SwiperSlide>
            <SwiperSlide>
              <img src="/slider/highlights-slider/02.png" width="100%" height="auto"/>
              <BullNameContainer>
                <BullName>DUQUESA FIV</BullName>
              </BullNameContainer>
            </SwiperSlide>
            <SwiperSlide>
              <img src="/slider/highlights-slider/03.png" width="100%" height="auto"/>
              <BullNameContainer>
                <BullName>GENGIS KHAN DE BRAS.</BullName>
              </BullNameContainer>
            </SwiperSlide>
            <SwiperSlide>
              <img src="/slider/highlights-slider/01.png" width="100%" height="auto"/>
              <BullNameContainer>
                <BullName>GENGIS KHAN DE BRAS.</BullName>
              </BullNameContainer>
            </SwiperSlide>

            <SliderButtonsContainer>
              <div className="slider-button-last">
                <img src="/icons/slider-arrow-left.svg" width="29px" height="23px" />
              </div>
              <div className="slider-button-next">
                <img src="/icons/slider-arrow-right.svg" width="29px" height="23px" />
              </div>
            </SliderButtonsContainer>

            <div class="see-more-responsive">
              <SeeMore responsive href="#">Ver todos os touros</SeeMore>
            </div>
          </Swiper>
        </Container>
      </Section>
    </>
  )
}