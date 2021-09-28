import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper'
import { Container } from 'react-bootstrap'
import { Section, HeaderContainer, SeeMore, ProgramNameContainer, ProgramName, ProgramContainer, SliderButtonsContainer } from './styles'

export default function ProgramsSection() {
  return (
    <>
      <Section id="programs-section">
        <Container>
          <HeaderContainer>
            <h2><strong>Nossos</strong> Programas</h2>
            <SeeMore href="#">Ver todos os programas</SeeMore>
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
            scrollbar={{ draggable: true }}
          >
            <SwiperSlide>
              <ProgramContainer>
                <img src="/slider/programs-slider/01.png"/>
              </ProgramContainer>
              <ProgramNameContainer>
                <ProgramName>PROGRAMA DE DESENVOLVIMENTO<br/>ESTRATÉGICO DE TOUROS</ProgramName>
              </ProgramNameContainer>
            </SwiperSlide>
            <SwiperSlide>
              <ProgramContainer>
                <img src="/slider/programs-slider/02.png" />
              </ProgramContainer>
              <ProgramNameContainer>
                <ProgramName>SELECT MATING SERVICE</ProgramName>
              </ProgramNameContainer>
            </SwiperSlide>
            <SwiperSlide>
              <ProgramContainer>
                <img src="/slider/programs-slider/03.png" width="220px" height="auto" />
              </ProgramContainer>
              <ProgramNameContainer>
                <ProgramName>N GEN</ProgramName>
              </ProgramNameContainer>
            </SwiperSlide>
            <SwiperSlide>
              <ProgramContainer>
                <img src="/slider/programs-slider/01.png"/>
              </ProgramContainer>
              <ProgramNameContainer>
                <ProgramName>PROGRAMA DE DESENVOLVIMENTO<br/>ESTRATÉGICO DE TOUROS</ProgramName>
              </ProgramNameContainer>
            </SwiperSlide>
            <SwiperSlide>
              <ProgramContainer>
                <img src="/slider/programs-slider/02.png" />
              </ProgramContainer>
              <ProgramNameContainer>
                <ProgramName>SELECT MATING SERVICE</ProgramName>
              </ProgramNameContainer>
            </SwiperSlide>
            <SwiperSlide>
              <ProgramContainer>
                <img src="/slider/programs-slider/03.png" width="220px" height="auto" />
              </ProgramContainer>
              <ProgramNameContainer>
                <ProgramNameContainer>
                  <ProgramName>N GEN</ProgramName>
                </ProgramNameContainer>
              </ProgramNameContainer>
            </SwiperSlide>
            <SwiperSlide>
              <ProgramContainer>
                <img src="/slider/programs-slider/01.png"/>
              </ProgramContainer>
              <ProgramNameContainer>
                <ProgramName>PROGRAMA DE DESENVOLVIMENTO<br/>ESTRATÉGICO DE TOUROS</ProgramName>
              </ProgramNameContainer>
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